const express = require('express');
const isAuthenticate = require('../utils/isAuthenticate');
const { generateChatResponse } = require('../controllers/chatController');


const chatRouter = express.Router();


chatRouter.post('/new',generateChatResponse)
module.exports = chatRouter;