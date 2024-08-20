const Product = require('../models/productModal');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    console.log("Fetch product API...")
    const products = await Product.find({}, { _id: 0, __v: 0 });
    res.json(products);
  } catch (error) {
    console.log("🚀 ~ exports.getProducts= ~ error:", error)
    res.status(500).json({ message: error.message });
  }
};
