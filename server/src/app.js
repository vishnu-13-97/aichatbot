require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRouter = require('./routes');
const app = express();
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(morgan("dev"))

app.use('/api/v1',appRouter)
                     
module.exports = app;