from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.Likes.addLike),
    path('subtract/', views.Likes.removeLike),
    path('check/', views.Likes.checkLikes)
]
