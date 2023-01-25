from rest_framework.response import Response
from rest_framework.decorators import api_view
from mongodb_instance import getCollection, clusterServiceProvider, collectionAuthentication
from utilities import doc_to_json

@api_view(['GET'])
def guest_login_serviceProvider(request, email):
    serviceProvider_auth_collection = getCollection(cluster=clusterServiceProvider, collection=collectionAuthentication)
    cursor = serviceProvider_auth_collection.find_one({"email" : email})
    
    print(cursor)
    if cursor == None:
        serviceProvider_auth_collection.insert_one({"email" : email})
        cursor = serviceProvider_auth_collection.find({"email" : email})
    
    return Response(doc_to_json(cursor))