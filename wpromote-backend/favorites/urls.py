
from django.urls import path
from . import views

urlpatterns = [
    path('new/', views.UserFavorites.createFavorite),
    path('delete/', views.UserFavorites.removeFavorite)
]
