const mongoose = require('mongoose');
const Jobs = mongoose.model('Jobs');
const axios = require('axios');

module.exports = {
    
    async store(req, res){
        const response = await Jobs.create(req.body);
        req.io.emit('newJob', response);
    },

    async listJobs(req, res){
        const response = await Jobs.find();
        res.json(response);
    }
}