from django.contrib import admin

from .models import TwitterUser

# Register your models here.
class TwitterUserAdmin(admin.ModelAdmin):
    list_display = ('twitter_id', 'twitter_username', 'follower_count', 'total_fav_count', 'total_retweet_count', 'location', 'profile_image', 'impact_score')

admin.site.register(TwitterUser, TwitterUserAdmin)
