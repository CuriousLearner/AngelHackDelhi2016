from __future__ import unicode_literals

from django.db import models

# Create your models here.
class TwitterUser(models.Model):
	twitter_id = models.CharField(max_length=20)
	follower_count = models.PositiveIntegerField()
	total_fav_count = models.PositiveIntegerField()
	total_retweet_count = models.PositiveIntegerField()
	location = models.CharField(max_length=30)
