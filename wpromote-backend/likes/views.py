import json
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from .models import PokemonLikes

class Likes:

    @csrf_exempt
    def addLike(request):
        if(request.method == 'POST'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            pokemon = PokemonLikes.objects.filter(pokemonName = body['pokemon'])
            if pokemon:
                pokemon.likes += 1
                pokemon.save()
            else: 
                addPokemon = PokemonLikes(pokemonName = body['pokemon'], likes = 1, dislikes = 0)
                addPokemon.save()
                return JsonResponse(serialize('json', pokemon), safe=False)

    @csrf_exempt
    def removeLike(request):
        if(request.method == 'POST'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            pokemon = PokemonLikes.objects.get(pokemonName = body['pokemon'])
            if pokemon:
                pokemon.dislikes += 1
                pokemon.save()
            else: 
                addPokemon = PokemonLikes(pokemonName = body['pokemon'], likes = 0, dislikes = 1)
                addPokemon.save()
        return HttpResponse()