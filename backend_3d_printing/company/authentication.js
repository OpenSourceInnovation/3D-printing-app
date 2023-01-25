const express = require('express');
const companyModel = require('./company_model');
const router = express.Router();

router.get('/auth/guest/:email', async (req, res) => {
    const user = new companyModel({
        email: req.params.email
    });
    try{
        const saveIt = await user.save();
        res.json(saveIt);
    }
    catch(err){
        res.json({message: err});
    }
    console.log("inside company: " + req.params.email);
    res.send({"hi" : "we are home"});
});


module.exports = router;