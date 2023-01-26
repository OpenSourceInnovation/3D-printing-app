const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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


//listening to the port
app.listen(3000);