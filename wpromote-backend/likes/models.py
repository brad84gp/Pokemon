from operator import mod
from django.db import models


class PokemonLikes(models.Model):

    pokemonName = models.CharField(max_length=50)
    likes = models.IntegerField()
    dislikes = models.IntegerField()