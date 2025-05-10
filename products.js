const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

module.exports = router;
