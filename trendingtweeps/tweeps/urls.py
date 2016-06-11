from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^initdata/$', views.getInitialUserData),
    url(r'^getdata/$', views.getTweetData),
    url(r'^calculateimpactscore/$', views.calculate_impact_score),
    url(r'^getimpact/(?P<username>\w+)/$', views.calculate_for_single_user),
    url(r'^$', views.index),
]