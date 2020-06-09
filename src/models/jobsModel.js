const mongoose = require('mongoose');

const jobsScheema = mongoose.Schema({
    description : String, 
    company : String, 
    company_address : String,
},{
    timestamps : true
});

module.exports = mongoose.model('Jobs', jobsScheema);