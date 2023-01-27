const express = require('express');
const { mongodbCollection } = require('../mongodb_instance');
const router = express.Router();

router.get('/get', async (req, res) => {

    const _collection = await mongodbCollection("models", "models");
    const cursor = await _collection.find({}).toArray();
    res.send(cursor);

});

module.exports = router;