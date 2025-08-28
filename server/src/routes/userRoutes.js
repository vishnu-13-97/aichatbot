
const express = require('express');
const { register, getAllusers, login, logOutuser } = require('../controllers/userController');


const userRouter = express.Router();


userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/logout',logOutuser);
userRouter.get('/',getAllusers);

module.exports = userRouter