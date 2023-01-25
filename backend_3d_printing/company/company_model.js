const mongoose = require('mongoose');

const company_model = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('company_model', company_model);