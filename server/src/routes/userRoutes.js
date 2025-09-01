const express = require('express');
const { register, getAllusers, login, logOutuser, getUserData } = require('../controllers/userController');
const isAuthenticate = require('../utils/isAuthenticate');


const userRouter = express.Router();


userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/logout',isAuthenticate,logOutuser);
userRouter.get('/',getAllusers);
userRouter.get('/auth-status',isAuthenticate,getUserData);

module.exports = userRouter