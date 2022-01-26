from django.contrib.auth import login
from django.urls import path
from .views import index, customLink, createLink, redirectToHomepage, logout_view


urlpatterns = [
    path('', redirectToHomepage, name='redirectToHomepage'),
    path('<int:user_id>/', index, name='index'),
    path('<int:user_id>/<slug:customUrl>', customLink, name='customLink'),
    path('addurl/', createLink, name='createLink'),
    
    path('accounts/login/', login, name='login'),
    path('logout/', logout_view, name='logout'),
]
