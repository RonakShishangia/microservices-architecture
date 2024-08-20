const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);

module.exports = router;
