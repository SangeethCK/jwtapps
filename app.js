const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')


app.use(bodyParser.urlencoded({extended:false})),
app.use(bodyParser.json())

const productRoute = require('./routes/product')
const userRoute = require('./routes/user')


app.use('/product' , productRoute),
app.use('/user' , userRoute),

// 'mongodb+srv://sang:anakutty@cluster0.5h6ps.mongodb.net/sang?retryWrites=true&w=majority'

mongoose.connect('mongodb+srv://sangeethck:Anakutty@cluster0.7qrxldx.mongodb.net/test')
mongoose.connection.on('error' , err => {
    console.log('Connection Faild')
});

mongoose.connection.on('connected' , connected =>{
    console.log('Conected with database')
}) 

app.use(cors());
app.use(morgan('dev'));





module.exports = app;