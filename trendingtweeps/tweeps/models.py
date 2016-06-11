from __future__ import unicode_literals

from django.db import models

# Create your models here.


class TwitterUser(models.Model):
    twitter_id = models.CharField(unique=True, max_length=20)
    twitter_username = models.CharField(max_length=30)
    follower_count = models.PositiveIntegerField()
    profile_image = models.CharField(max_length=200)
    total_fav_count = models.PositiveIntegerField(null=True)
    total_retweet_count = models.PositiveIntegerField(null=True)
    location = models.CharField(max_length=30)
    impact_score = models.FloatField(null=True)
    rank = models.PositiveIntegerField(default=0)
