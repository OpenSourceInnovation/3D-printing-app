const express = require('express');
const { mongodbCollection } = require('../mongodb_instance');
const router = express.Router();

router.post('/add', async (req, res)=>{
    try{
        obj = req.body.obj;
        companyEmail = req.body.company_email;
        title = req.body.title;
        description = req.body.description;

        const _collection = await mongodbCollection("models", "models");
        const check = await _collection.findOne({"obj" : obj});
        if(check != null){
            res.send({"error" : "model is already present in the database"});
        }
        else{

            await _collection.insertOne({
                "obj" : obj,
                "email" : companyEmail,
                "title" : title,
                "description" : description
            });

            const cursor = await _collection.findOne({"obj" : obj});

            res.send(cursor);
        }
    }catch(error){
        res.send({"error" : error});
    }

});

router.get('/get/:email', async (req, res)=>{
    try{
        const _collection = await mongodbCollection("models", "models");
        email = req.params.email;
        const cursor = await _collection.find({"email" : email}).toArray();
        res.send(cursor);

    }catch(error){
        res.send({"error" : error});
    }
});

module.exports = router;