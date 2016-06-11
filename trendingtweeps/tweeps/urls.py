from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^initdata/$', views.getInitialUserData),
]