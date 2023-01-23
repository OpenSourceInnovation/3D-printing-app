from django.urls import path
from . import views

#Endpoints are mapped in this file
urlpatterns = [
    path('',views.home),
]
