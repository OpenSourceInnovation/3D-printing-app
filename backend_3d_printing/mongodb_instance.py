import pymongo

# clusters
clusterCompany = "company"
clusterServiceProvider = "service_provider"

# collections
collectionAuthentication = "authentication"

def getCollection(cluster, collection):
    client = pymongo.MongoClient("mongodb+srv://threedprinting:threedprinting@three-d-printing-model.uvpiynj.mongodb.net/?retryWrites=true&w=majority")
    cluster = client[cluster]
    collection = cluster[collection]
    return collection