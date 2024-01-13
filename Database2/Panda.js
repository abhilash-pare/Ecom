const mongoose = require('mongoose');

// Define the schema for the product
const pandaMaster = new mongoose.Schema({
   labourerName: {
    type: String,
    default: "",
  },
  typeOfWork: {
    type: String,
    default: "",
  },
  hoursWorked: {
    type: String,
    default: "",
  },paymentPerHour: {
    type: String,
    default: "",
  },costPerPiece: {
    type: String,
    default: "",
  },totalPieces: {
    type: String,
    default: "",
  },totalCostByWorkHour: {
    type: String,
    default: "",
  },totalCostByPiece: {
    type: String,
    default: "",
  },
});

module.exports=mongoose.model('Panda',pandaMaster)
