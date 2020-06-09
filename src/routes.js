const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const jobsController = require('./controllers/jobsController');

routes.post('/users', userController.persistUser);
routes.get('/users', userController.listUsers);
routes.get('/userGit/:user', userController.getUserGit);
routes.get('/userGetAll', userController.getAllUsersGit);
routes.post('/user', userController.postByUser);
routes.get('/user/:id', userController.getById);

//Jobs
routes.post('/jobs', jobsController.store);
routes.get('/jobs', jobsController.listJobs);

//Login
routes.post('/login/:username',userController.login);

module.exports = routes;