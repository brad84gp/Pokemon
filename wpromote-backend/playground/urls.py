
from django.urls import path
from . import views

urlpatterns = [
    path('newUser/', views.UserInfo.createUser),
    path('getUser/', views.UserInfo.retrieveUser),
    path('updateUser/', views.UserInfo.updateUser),
    path('deleteUser/', views.UserInfo.deleteUser)
]
