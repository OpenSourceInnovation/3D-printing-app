const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//import routes
const companyAuth = require('./company/authentication');
app.use('/company', companyAuth);

const serviceProvider = require('./service_provider/authentication');
app.use('/serviceprovider', serviceProvider);

app.listen(3000);