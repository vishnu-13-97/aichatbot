require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRouter = require('./routes');
const helmet = require('helmet');
const app = express();
app.use(express.json());

app.use(helmet())

const cors = require('cors');



app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, 
  })
);


app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(morgan("dev"))

app.use('/api/v1',appRouter)
                     
module.exports = app;