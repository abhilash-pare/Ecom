const mongoose = require('mongoose');

// Define the schema for the product
const finishedProductSchema = new mongoose.Schema({
  productSizes: {
    sizeS: {
      type: Number,
      default: 0,
    },
    sizeM: {
      type: Number,
      default: 0,
    },
    sizeL: {
      type: Number,
      default: 0,
    },
    sizeXL: {
      type: Number,
      default: 0,
    },
  },
  finishedProductQuantity: {
    type: Number,
    default: 0,
  },
  costPerPiece: {
    type: Number,
    default: 0,
  },
  cuttingCost: {
    type: Number,
    default: 0,
  },
  stichingCost: {
    type: Number,
    default: 0,
  },
  threadButtoncost: {
    type: Number,
    default: 0,
  },
  labourCost: {
    type: Number,
    default: 0,
  },
  cuffColorCost: {
    type: Number,
    default: 0,
  },
  buttonCost: {
    type: Number,
    default: 0,
  },
  stripNextCost: {
    type: Number,
    default: 0,
  },
  polyPackingCost: {
    type: Number,
    default: 0,
  },
  cardBoardCost: {
    type: Number,
    default: 0,
  },
  pressIronCost: {
    type: Number,
    default: 0,
  },
  otherTotalCost: {
    type: Number,
    default: 0,
  },
  
  totalCost: {
    type: Number,
    default: 0,
  },
});

module.exports=mongoose.model('Product',finishedProductSchema)
