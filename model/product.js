const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
_id: { type: Number, required: true },
sku: { type: String, required: true },
description: { type: String, required: true },
instock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;