from rest_framework.response import Response
from rest_framework.decorators import api_view
import pymongo
import json
from bson import json_util

'''This files contains all api endpoints. This file can be treated as starting point 
of all the services.'''

@api_view(['GET'])
def home(request):
    '''This is home api if it returns below mentioned message then it can be 
    considered as app has been successfully configured and started.'''
    
    
    client = pymongo.MongoClient("mongodb+srv://threedprinting:threedprinting@three-d-printing-model.uvpiynj.mongodb.net/?retryWrites=true&w=majority")
    cluster = client['company']
    collection = cluster['authentication']
    cursor = collection.find()
    json_docs = []
    
    for doc in cursor:
        util = json.loads(json_util.dumps(doc))
        json_docs.append(util)
    return Response(json_docs)

