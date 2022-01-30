from django.contrib.auth import login
from django.urls import path
from .views import index, customLink, createLink, editLink, deleteLink, logout_view


urlpatterns = [
    path('', index, name='index'),
    path('<int:user_id>/<slug:customUrl>/', customLink, name='customLink'),
    path('create/', createLink, name='createLink'),
    path('editLink/<slug:customUrl>', editLink, name='editLink'),
    path('deleteLink/<slug:customUrl>', deleteLink, name='deleteLink'),
    
    path('login/', login, name='login'),
    path('logout/', logout_view, name='logout'),
]
