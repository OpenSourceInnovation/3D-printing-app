const express = require('express');
const { mongodbCollection } = require('../mongodb_instance');
const router = express.Router();


router.get('/auth/guest/:email', async (req, res) => {

    email = req.params.email;
    const _collection = await mongodbCollection("service_provider", "authentication");
    var cursor = await _collection.findOne({"email" : email});
    if(cursor == null){
        await _collection.insertOne({"email" : email});
        cursor = await _collection.findOne({"email" : email});
    }

    res.send(cursor);

});


module.exports = router;