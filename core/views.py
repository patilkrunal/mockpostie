from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Link
import json


def index(request):
    current_user = request.user
    if current_user.is_authenticated:
        links = Link.objects.filter(user=current_user)
    else:
        links = Link.objects.filter(user=None)
    
    json_data = list(links.values())
    return JsonResponse(json_data, safe = False)
