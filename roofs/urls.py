from django.conf.urls import patterns, url, include

from roofs import views

# from rest_framework_nested import routers

# from bets.views import PlayerProfileViewSet


# router = routers.SimpleRouter()
# router.register(r'playerprofiles', PlayerProfileViewSet)
# router.register(r'playerpick', views.PlayerPickViewSet)


urlpatterns = [
  url(r'^$', views.home, name='home'),
  url(r'^index/$', views.index, name='index'),
  url(r'^api/roofs/$', views.roof_list, name='roof_list'),
  ]
