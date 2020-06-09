const express = require('express');
const mongoose = require('mongoose');
const server = express();
const requireDir = require('require-dir');
const cors = require('cors');

//Database conection
mongoose.connect('mongodb+srv://admin:admin@primeiro-arkqs.gcp.mongodb.net/integraGit?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology : true});

//Config
server.use(cors());
server.use(express.json());

//Models
requireDir('./src/models');

//Rotas
server.use('/api', require('./src/routes.js'));

server.listen(3002);
console.log('Server listening port 3002');