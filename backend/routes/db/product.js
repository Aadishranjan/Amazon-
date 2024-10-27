const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  offPrice: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('PRODUCT', productSchema);