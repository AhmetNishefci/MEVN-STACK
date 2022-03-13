const express = require("express");
const router = express.Router();

const Product = require("../models/product");

// Get /products
router.get('/', (req,res) => {
    Product.find({}, (error,products) => {
        if(error) console.log(error);
        res.json(products);
    });
});

// Get /products/category
router.get('/:category', (req,res) => {
    const cat = req.params.category;

    Product.find({ category: cat}, (error,products) => {
        if(error) console.log(error);
        res.json(products);
    });
});

module.exports = router;