const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors'); //Permite configurações de acesso da API
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


//Database conection
mongoose.connect(process.env.MONGODB, {useNewUrlParser : true, useUnifiedTopology : true});

//Config
var corsOptions = {
    origin : 'http://localhost:3000',
    optionsSuccessStatus : 200
}
app.use(cors());
app.use(express.json());

//Models
requireDir('./src/models');

//WebSocket - Middleware
app.use((req, res, next)=>{
    req.io = io;
    next();
});

//Rotas
app.use('/api', require('./src/routes.js'));

server.listen(process.env.port || 3002);
console.log(`Server listening port ${process.env.port || 3002}`);