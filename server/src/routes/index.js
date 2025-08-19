const express = require('express');
const userRouter = require('./userRoutes');


const appRouter = express.Router()

appRouter.use('/user',userRouter)
module.exports = appRouter;