const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    address : {
        type:String,
        required:true,
    },
    contact : {
        type:String,
        required:true,
    },
    quantity : {
        type:String,
        required:true,
    },
    size : {
        type:String,
        required:true,
    },
    sellingprice : {
        type:String,
        required:true,
    },
    profitmargin : {
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('study',userSchema)



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
