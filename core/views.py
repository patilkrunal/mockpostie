from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from django.http import HttpResponseRedirect, HttpResponse, StreamingHttpResponse
from django.views.generic import TemplateView
from django.contrib.auth import logout
from django.shortcuts import render
from django.core import serializers
from django.conf import settings
from django.template import engines
import urllib.request
import json

from .models import Link

def iter_response(response, chunk_size=65536):
    try:
        while True:
            data = response.read(chunk_size)
            if not data:
                break
            yield data
    finally:
        response.close()

def catchall_dev(request, upstream='http://localhost:3000'):
    upstream_url = upstream + request.path
    response = urllib.request.urlopen(upstream_url)
    content_type = response.getheader('Content-Type')
    print('content type: ', content_type, '\n')

    if content_type == 'text/html; charset=utf-8':
        response_text = response.read().decode()
        response.close()
        return HttpResponse(
            engines['django'].from_string(response_text).render(),
            content_type=content_type,
            status=response.status,
            reason=response.reason,
        )
    else:
        return StreamingHttpResponse(
            iter_response(response),
            content_type=content_type,
            status=response.status,
            reason=response.reason,
        )

catchall_prod = TemplateView.as_view(template_name='index.html')

catchall = catchall_dev if settings.DEBUG else catchall_prod


def index(request):
    if request.user.is_anonymous:
        links = Link.objects.all()
    elif request.user.is_authenticated:
        user = request.user
        links = Link.objects.filter(user=user)

    json_data = list(links.values())
    return JsonResponse(json_data, safe = False)


def customLink(request, user_id, customUrl):    
    if request.method=="GET":   
        if request.user.is_anonymous:
            link = Link.objects.latest('id')
        elif request.user.is_authenticated:
            user = request.user
            link = Link.objects.get(customUrl=customUrl, user=request.user)
        response = link.response
        return HttpResponse(response)
    
    return HttpResponse("customLink here")


# @login_required
@csrf_exempt
def createLink(request):
    data = json.loads(request.body.decode('utf-8'))
    if request.method=="POST":   
        customUrl = data['customUrl']
        response = data['response']
        
        if request.user.is_anonymous:
            link = Link(customUrl=customUrl, response=response)
        else:
            user = request.user
            link = Link(customUrl=customUrl, response=response, user=user)
        
        link.save()
        return HttpResponse("success")
    return HttpResponse('Request is not a POST Request')


# @login_required
@csrf_exempt
def editLink(request, customUrl):
    data = json.loads(request.body.decode('utf-8'))
    if request.method=="POST":
        response = data['response']
        if request.user.is_anonymous:
            link = Link.objects.filter(customUrl=customUrl)
        else:
            link = Link.objects.filter(user=request.user, customUrl=customUrl)
        link.update(response=response)
        return HttpResponse("Link updated")
    return HttpResponse('Error while updating link')


# @login_required
@csrf_exempt
def deleteLink(request, customUrl):
    print(request.method, customUrl)
    if request.method=="POST":
        if request.user.is_anonymous:
            link = Link.objects.filter(customUrl=customUrl)
        else:
            link = Link.objects.filter(user=request.user, customUrl=customUrl)
        link.delete()
        return HttpResponse("Link deleted")
    return HttpResponse('Error while deleting link')


def login(request):
    if request.user.is_authenticated:
        user_id = request.user.id
        return HttpResponseRedirect(redirect_to='%s' %user_id)
    
    return HttpResponse("login here")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')
