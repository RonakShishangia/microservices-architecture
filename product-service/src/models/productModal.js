const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // slug: { type: string, required: true, unique: true},
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
