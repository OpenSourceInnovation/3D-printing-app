import json
from bson import json_util

def doc_to_json(doc):
    return json.loads(json_util.dumps(doc))

def cursor_to_json(collection):
    json_docs = []
    for doc in collection:
        json_docs.append(doc_to_json(doc))
    
    return cursor_to_json