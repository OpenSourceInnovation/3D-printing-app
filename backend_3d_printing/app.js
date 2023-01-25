const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://threedprinting:threedprinting@three-d-printing-model.uvpiynj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

app.use(cors());

//import routes
const companyAuth = require('./company/authentication');
app.use('/company', companyAuth);

//middleware
// app.use('/', () => {
//     console.log("middle ware running");
// });


//routes
app.get('/company', (req, res) => {
    res.send("we are home in home");
});

//connected to mongodb
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://threedprinting:threedprinting@three-d-printing-model.uvpiynj.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("connected to db");
});

//listening to the port

app.listen(3000);