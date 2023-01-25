from rest_framework.response import Response
from rest_framework.decorators import api_view
from mongodb_instance import getCollection, clusterCompany, collectionAuthentication
from utilities import doc_to_json

@api_view(['GET'])
def guest_login_company(request, email):
    company_auth_collection = getCollection(cluster=clusterCompany, collection=collectionAuthentication)
    cursor = company_auth_collection.find_one({"email" : email})
    
    print(cursor)
    if cursor == None:
        company_auth_collection.insert_one({"email" : email})
        cursor = company_auth_collection.find({"email" : email})
    
    return Response(doc_to_json(cursor))