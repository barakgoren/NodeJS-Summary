const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productModel = require('./models/product');
const productRouter = require('./routers/productRouter');

app.use(bodyParser.json());
app.use('/products', productRouter);

app.listen(port, () => {
    console.log("Server started");
    connect();
})

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/myStore').then(connect => {
        console.log("MongoDB connected");
    })
}
