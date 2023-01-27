const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'*',
 }

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import routes

//importing company user authentication routes
const companyAuth = require('./company/authentication');
app.use('/company', companyAuth);

//importing service provider user authentication routes
const serviceProvider = require('./service_provider/authentication');
app.use('/serviceprovider', serviceProvider);

//importing get all modules
const getAllModules = require('./service_provider/get_models');
app.use('/models', getAllModules);

//importing company add model
const companyModel = require('./company/add_model');
app.use('/company/model', companyModel);

//listening to the port
app.listen(3000);