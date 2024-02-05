const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const productModel = require('../models/product');

router.get('/', (req, res) => {
    productModel
        .find()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err))
})

router.post('/', (req, res) => {
    productModel
        .create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err))
})

router.delete('/', (req, res) => {
    productModel
        .deleteMany(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err))
})

router.put('/', (req, res) => {
    productModel
        .updateMany(req.body.filter, req.body.update)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err))
})

router.get('/:category', async(req, res) => {
    const products = await productModel.find({category:req.params.category});
    res.status(200).json(products);
})


module.exports = router;