const mongoose = require('mongoose');

const productScheme = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    inStock: Boolean
});

const productModel = mongoose.model('product', productScheme);

module.exports = productModel;