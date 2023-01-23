from rest_framework.response import Response
from rest_framework.decorators import api_view


'''This files contains all api endpoints. This file can be treated as starting point 
of all the services.'''

@api_view(['GET'])
def home(request):
    '''This is home api if it returns below mentioned message then it can be 
    considered as app has been successfully configured and started.'''
    
    return Response({"message":"This is homepage"})