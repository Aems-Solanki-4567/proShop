const express = require("express");
const router = new express.Router();
const Product = require("../models/productModel");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.send({
      error: e,
    });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Product Not Found",
      });
    }
  } catch (e) {
    res.status(500).json({ Message: "Product Not Found" });
  }
});

module.exports = router;
