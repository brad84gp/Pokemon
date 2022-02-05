import json
import logging
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from playground.models import User
from .models import Favorites

class UserFavorites:

    @csrf_exempt
    def createFavorite(request):
        if(request.method == 'POST'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            newFav = Favorites(pokemonName = body['pokemon'], user_id=body['pk'])
            newFav.save()
            return JsonResponse(serialize('json', [newFav]), safe=False)

    @csrf_exempt
    def removeFavorite(request):
        if(request.method == 'DELETE'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            Favorites.objects.filter(pokemonName = body['pokemon'], user_id=body['pk']).delete()
            return JsonResponse(serialize('json', []), safe=False)

    @csrf_exempt
    def checkFavorite(request):
        if(request.method == 'POST'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            try:
                liked = Favorites.objects.filter(pokemonName = body['pokemon'], user_id=body['pk'])[0]
                return JsonResponse(serialize("json", [liked]), safe=False)
            except IndexError:
                logging.debug("Error: Record does not exist")
                return JsonResponse([{"Error": "Record does not exist"}], safe=False)

