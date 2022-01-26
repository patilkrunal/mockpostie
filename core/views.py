from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import logout
from django.shortcuts import render
from django.core import serializers
from .models import Link
import json


@login_required
def index(request, user_id):
    current_user = request.user
    if current_user.is_authenticated:
        links = Link.objects.filter(user=current_user)
    else:
        return HttpResponseRedirect(redirect_to='/signup')
    

    json_data = list(links.values('customUrl'))
    return JsonResponse(json_data, safe = False)

@login_required()
def customLink(request, user_id, customUrl):
    current_user = request.user
    if current_user.is_authenticated:
        link = Link.objects.get(customUrl=customUrl, user=current_user)
    else:
        return HttpResponseRedirect(redirect_to='/signup')
    
    response = link.response
    return HttpResponse(response)


@csrf_exempt
@login_required()
def createLink(request):
    print(request.POST)
    if request.method=="POST":   
        customUrl = request.POST['customUrl']
        response = request.POST['response']
        user = request.user

        link = Link(customUrl=customUrl, response=response, user=user)
        link.save()
        return HttpResponse("success")
    return HttpResponse('Request is not a POST Request')


def redirectToHomepage(request):
    if request.user.is_authenticated:
        user_id = request.user.id
        return HttpResponseRedirect(redirect_to='%s' %user_id)
    
    return HttpResponse("Homepage here")


def login(request):
    if request.user.is_authenticated:
        user_id = request.user.id
        return HttpResponseRedirect(redirect_to='%s' %user_id)
    
    return HttpResponse("login here")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')