const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const mongoose = require('mongoose')
const checkAuth = require('../middleware/check-auth')


router.get('/', checkAuth, (req, res, next) => {
    Product.find()
        .then(result => {
            res.status(200).json({
                product: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Product.findById(_id)
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                product: result
            })
        })
        .catch(error => {
            console.log(err);
        })

})

router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Product.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {

            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender


        }
    })
        .then(result => {
            res.status(200).json({
                updated_product: result
            })
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({ err: error })
        })
})

router.delete('/:id', (req, res, next) => {
    Product.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: "Product is deleted",
                result: result
            })
        })
})






router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender

    })

    product.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                newProduct: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


})







module.exports = router;