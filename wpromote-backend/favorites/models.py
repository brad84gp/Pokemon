from django.db import models
from playground.models import User


class Favorites(models.Model):


    pokemonName = models.CharField(max_length=50)
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)