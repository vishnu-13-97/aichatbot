
const express = require('express');
const { register, getAllusers, login } = require('../controllers/userController');


const userRouter = express.Router();


userRouter.post('/register',register);
userRouter.post('/login',login)
userRouter.get('/',getAllusers);

module.exports = userRouter