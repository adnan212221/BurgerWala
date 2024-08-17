const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require('dotenv').config();
const cors = require('cors')


connectDb()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods:['GET', 'POST', 'PUT', 'DELETE']
}))

app.enable("trust proxy")

app.get('/',(req,res,next)=>{
    res.send({
        message:"Hello World"
    })
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/users', require('./routes/orderRoutes'))

app.use(errorHandler)


module.exports = app;


