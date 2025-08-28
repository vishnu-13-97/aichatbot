const express = require('express');
const userRouter = require('./userRoutes');
const chatrouter = require('./chatRoutes');

const appRouter = express.Router()

appRouter.use('/user',userRouter)
appRouter.use('/chats',chatrouter)
module.exports = appRouter;