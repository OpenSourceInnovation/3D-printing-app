from django.urls import path
from . import authentication

#Endpoints are mapped in this file
urlpatterns = [
    path('guest/login/<email>',authentication.guest_login_serviceProvider),
]
