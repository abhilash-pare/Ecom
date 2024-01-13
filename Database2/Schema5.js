
const mongoose = require('mongoose')

const labourmanagerSchema = new mongoose.Schema({
    labourername : {
        type:String,
        required:true,
    },
    // date : {
    //     type:String,
    //     required:true,
    // },
    typeOfWork : {
        type:String,
        required:true,
    },
    hoursWorked : {
        type:String,
        required:true,
    },
    paymentPerHour : {
        type:String,
        required:true,
    },
    costPerPiece : {
        type:String,
        required:true,
    },
    totalPieces : {
        type:String,
        required:true,
    },
    totalCostByWorkHour : {
        type:String,
        required:true,
    },
    totalCostByPiece : {
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('labour',labourmanagerSchema)



// //const bcrypt = require('bcrypt');
// const saltRounds = 10;

// // Assuming 'user' is an object with a 'password' field
// const user = {
//   username: 'example',
//   password: 'user_plain_password',
// };

// bcrypt.hash(user.password, saltRounds, (err, hash) => {
//   if (err) {
//     console.error(err);
//   } else {
//     // Store 'hash' in the database along with other user information
//     user.password = hash;
//     console.log('User with hashed password:', user);
//   }
// });



// labourerName: '',
// date: '',
// typeOfWork: '',
// hoursWorked: '',
// paymentPerHour: '',
// totalPayment: '',
// costPerPiece: '',
// totalPieces: '',
// totalCostByWorkHour: '',
// totalCostByPiece:''