const express = require('express');
const { mongodbCollection } = require('../mongodb_instance');
const router = express.Router();

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}

// guest login for the company using the email
router.get('/auth/guest/:email', async (req, res) => {

    email = req.params.email;
    if(!isEmail(email)){
        res.send({"error" : "email is not validate"});
    }
    else{
        const _collection = await mongodbCollection("company", "authentication");
        var cursor = await _collection.findOne({"email" : email});
        if(cursor == null){
            await _collection.insertOne({"email" : email});
            cursor = await _collection.findOne({"email" : email});
        }

        res.send(cursor);
    }

});

// login using email and password
router.post('/auth/login', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const _collection = await mongodbCollection("company", "authentication");
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
        const _collection = await mongodbCollection("company", "authentication");
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