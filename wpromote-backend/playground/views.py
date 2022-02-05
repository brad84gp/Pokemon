import json
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from .models import User
# Create your views here.


class UserInfo:

    @csrf_exempt
    def createUser(request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        newUser = User(firstname = body['firstname'], lastname = body['lastname'], username = body['username'], password = body['password'], email = body['email'])
        newUser.save()
        user = User.objects.filter(username = body['username'])
        return JsonResponse(serialize('json', user), safe=False)

    @csrf_exempt
    def retrieveUser(request):
        if(request.method == 'POST'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            name = body['username']
            user = User.objects.filter(username = name)
            return JsonResponse(serialize('json', user), safe=False)

    @csrf_exempt
    def updateUser(request):
        if(request.method == 'PATCH'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            user = User.objects.filter(id=body['pk'])
            user.update(firstname = body['firstname'], lastname = body['lastname'], username = body['username'], email = body['email'])
            updatedUser = User.objects.get(id=body['pk'])
            return JsonResponse(serialize('json', [updatedUser]), safe=False)

    @csrf_exempt
    def deleteUser(request):
        if(request.method == 'DELETE'):
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            User.objects.filter(id=body['pk']).delete()
            return HttpResponse()



