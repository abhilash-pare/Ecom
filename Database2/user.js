// const mongoose = require('mongoose')

// const loginSchema = new mongoose.Schema({
//     email : {
//         type:String,
//         required:true,
//     },
//     password : {
//         type:String,
//         required:true,
//     }
// })

// //module.exports=mongoose.model('signup',loginSchema)
// const collection = new mongoose.model("signup",loginSchema)
// module.exports = collection;


const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
//const secretKey = process.env.JWT_SECRET || 'AdminKeyOrchy'; // Use a default value if not set
// const userSchema = new mongoose.Schema({
// 	firstName: { type: String, required: true },
// 	lastName: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// });

const userSchema = new mongoose.Schema(
	{
	  username: { type: String, required: true, unique: true },
	  email: { type: String, required: true, unique: true },
	  password: { type: String, required: true },
	},
  );
//const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });

// userSchema.methods.generateAuthToken = function () {
//      const token = jwt.sign({ userSchema }, secretKey, { expiresIn: '7d' });

// 	// const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 	// 	expiresIn: "7d",
// 	// });
// 	return token;
// };

const Sign = mongoose.model("signup", userSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };


module.exports =  Sign;
