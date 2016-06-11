from django.shortcuts import render, HttpResponse
import tweepy
from .models import TwitterUser
from os import environ

config = {
	'consumer_key': environ['consumer_key'],
	'consumer_secret': environ['consumer_secret'],
	'access_key': environ['access_key'],
	'access_secret': environ['access_secret']
}

auth = tweepy.OAuthHandler(config["consumer_key"], config["consumer_secret"])
auth.set_access_token(config["access_key"], config["access_secret"])
api = tweepy.API(auth)


# Create your views here.
def getInitialUserData(request):
	for i in range(15):
		searched_users = api.search_users(q="location=Delhi", page=i+1)
		searched_users = list(searched_users)
		for user in range(len(searched_users)):
			json_data = searched_users[user]._json
			twitter_id = json_data['id']
			follower_count = json_data['followers_count']
			location = 'Delhi'
			profile_image_url = json_data['profile_image_url']
			username = json_data['screen_name']
			try:
				TwitterUser.objects.create(twitter_id=twitter_id, follower_count=follower_count, twitter_username=username, profile_image=profile_image_url, location=location)
			except:
				pass
	return HttpResponse("All data fetched")


def getTweetData(request):
	allUsers = TwitterUser.objects.all()
	for user in allUsers:
		uid = user.twitter_id
		timeline = api.user_timeline(uid)
		timeline = list(timeline)
		favorite_count = 0
		retweet_count = 0
		for tweet in range(len(timeline)):
			json_data = timeline[tweet]._json
			favorite_count += json_data['favorite_count']
			retweet_count += json_data['retweet_count']
		try:
			t = TwitterUser.objects.get(twitter_id=uid)
		except:
			print uid
		t.total_fav_count = favorite_count
		t.total_retweet_count = retweet_count
		t.save()
	return HttpResponse("Favourites and Retweets calculated!")


def calculate_impact_score(request):
	max_impact_val = 161300000
	allUsers = TwitterUser.objects.all()
	for user in allUsers:
		social_impact_score = social_impact_formula(user.total_retweet_count, user.total_fav_count, 0, user.follower_count)
		user.impact_score = ((social_impact_score / max_impact_val) * 10000) % 100
		user.save()
	return HttpResponse("Social Impact Score calculated")


def social_impact_formula(retweet, favorites, tweets, followers):
	return retweet * 8.5 + favorites * 5.5 + tweets * 6 + followers * 9.25


def calculate_for_single_user(request, username):
	timeline = api.user_timeline(username)
	timeline = list(timeline)
	favorite_count = 0
	retweet_count = 0
	for tweet in range(len(timeline)):
		json_data = timeline[tweet]._json
		favorite_count += json_data['favorite_count']
		retweet_count += json_data['retweet_count']
		follower_count = json_data['user']['followers_count']
		location = json_data['user']['location']
		profile_image_url = json_data['user']['profile_image_url']
		twitter_id = json_data['user']['id']
	try:
		t = TwitterUser.objects.get(twitter_id=twitter_id)
	except:
		t = TwitterUser.objects.create(twitter_id=twitter_id, total_fav_count=favorite_count, total_retweet_count=retweet_count, follower_count=follower_count, twitter_username=username, profile_image=profile_image_url, location=location)
	max_impact_val = 161300000
	social_impact_score = social_impact_formula(t.total_retweet_count, t.total_fav_count, 0, t.follower_count)
	t.impact_score = ((social_impact_score / max_impact_val) * 10000) % 100
	t.save()
	return HttpResponse("Done")
