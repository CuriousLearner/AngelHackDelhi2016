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
			TwitterUser.objects.create(twitter_id=twitter_id, follower_count=follower_count, twitter_username=username, profile_image=profile_image_url)
	return HttpResponse("All data fetched")
