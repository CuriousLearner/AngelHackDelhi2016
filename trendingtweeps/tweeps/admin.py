from django.contrib import admin

from .models import TwitterUser

# Register your models here.
class TwitterUserAdmin(admin.ModelAdmin):
    list_display = ('twitter_id', 'follower_count', 'total_fav_count', 'total_retweet_count', 'location', 'impact_score')

admin.site.register(TwitterUser, TwitterUserAdmin)
