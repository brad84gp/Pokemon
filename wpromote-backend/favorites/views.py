import json
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
            user = User.objects.get(id=body['pk'])
            if user:
                newFav = Favorites(pokemonName = body['pokemon'], user_id=body['pk'])
                newFav.save()
                data = [{'msg' : 'success'}]
                return HttpResponse()

    @csrf_exempt
    def removeFavorite(request):
        if(request.method == 'DELETE'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            user = User.objects.get(id=body['pk'])
            if user:
                Favorites.objects.filter(pokemonName = body['pokemon'], user_id=body['pk']).delete()
                return HttpResponse()