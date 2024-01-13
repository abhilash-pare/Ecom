const mongoose = require('mongoose')

const rawmaterialSchema = new mongoose.Schema({
    fabricType : {
        type:String,
        required:true,
    },
    fabricColor : {
        type:String,
        required:true,
    },
    fabricPattern : {
        type:String,
        required:true,
    },
    lotSize : {
        type:String,
        required:true,
    },
    quantity : {
        type:String,
        required:true,
    },
    image : {
        type:String,
        required:true,
    },
    lengthInMeter : {
        type:String,
        required:true,
    },
    pricePerMeter : {
        type:String,
        required:true,
    },
    totalCost : {
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('Raw',rawmaterialSchema)

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
// {
//     "fabricType": "silk",
//       "fabricColor": "yellow",
//        "fabricPattern": "zigzag",
//        "lotSize": "25",
//        "quantity": "250",
//        "image": "Aftersometime",
//        "lengthInMeter": "100",
//        "pricePerMeter": "100",
//        "totalCost": "10000"
//   }