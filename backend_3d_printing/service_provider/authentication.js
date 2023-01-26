const express = require('express');
const { mongodbCollection } = require('../mongodb_instance');
const router = express.Router();


// guest login for the service provider using the email
router.get('/auth/guest/:email', async (req, res) => {
    try{
        email = req.params.email;
        const _collection = await mongodbCollection("service_provider", "authentication");
        var cursor = await _collection.findOne({"email" : email});
        if(cursor == null){
            await _collection.insertOne({"email" : email});
            cursor = await _collection.findOne({"email" : email});
        }

        res.send(cursor);
    }catch(error){
        res.send({"error" : error});
    }

});

// login using email and password
router.post('/auth/login', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const _collection = await mongodbCollection("service_provider", "authentication");
        var cursor = await _collection.findOne({"email" : email, "password" : password});
        console.log(cursor);
        if(cursor == null){
            res.send({"error" : "No user found or the password is wrong"});
        }
        else{
            res.send(cursor);
        }
    }catch(error){
        res.send({"error" : error});
    }
});


// signup using email and password
router.post('/auth/signup', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const _collection = await mongodbCollection("service_provider", "authentication");
        var cursor = await _collection.findOne({"email" : email});
        if(cursor == null){
            await _collection.insertOne({"email" : email, "password" : password});
            cursor = await _collection.findOne({"email" : email, "password" : password});
            res.send(cursor);
        }
        else{
            res.send({"error" : "User is already present in the database try login"});
        }
    }catch(error){
        res.send({"error" : error});
    }
});


module.exports = router;