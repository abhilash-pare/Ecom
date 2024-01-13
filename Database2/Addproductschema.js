const mongoose = require('mongoose');

// Define the schema for the product
const addProductSchema = new mongoose.Schema({
   productName: {
    type: String,
    default: "",
  },
  productDescription: {
    type: String,
    default: "",
  },
  productPrice: {
    type: String,
    default: "",
  },productDiscountedPrice: {
    type: String,
    default: "",
  },productImage: {
    type: String,
    default: "",
  },
  stockAvailable: {
    type: String,
    default: "",
  },
  category : {
    type: String,
    default: "",
  },
  fabricType: {
    type: String,
    default: "",
  },
  fabricColor: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  sleeves: {
    type: String,
    default: "",
  },
  occasion: {
    type: String,
    default: "",
  },
  fit: {
    type: String,
    default: "",
  },
  pattern: {
    type: String,
    default: "",
  },
  neckLine: {
    type: String,
    default: "",
  },
  collar: {
    type: String,
    default: "",
  }

});

module.exports=mongoose.model('addproduct',addProductSchema)
