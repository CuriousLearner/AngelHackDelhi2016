# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-11 21:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TwitterUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('twitter_id', models.CharField(max_length=20, unique=True)),
                ('twitter_username', models.CharField(max_length=30)),
                ('follower_count', models.PositiveIntegerField()),
                ('profile_image', models.CharField(max_length=200)),
                ('total_fav_count', models.PositiveIntegerField(null=True)),
                ('total_retweet_count', models.PositiveIntegerField(null=True)),
                ('location', models.CharField(max_length=30)),
                ('impact_score', models.FloatField(null=True)),
                ('rank', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
