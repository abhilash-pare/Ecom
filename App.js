const api = require('./Store2/ApiStore2')
const express = require('express')
const database = require('./Database2/config2')
//const collection = require('./Database2/user')
const path = require("path");
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");
require('dotenv').config(); // Load environment variables from a .env file

const userRoutes = require("./routes/users");
//const authRoutes = require("./routes/auth");

const app = api.app
database.connect()

//app.get('/books',api.getAllBooks)

app.post('/createdist',api.createBook)
app.post('/createrawmaterial',api.createRawMaterialSchema)
app.post('/createfinishedproduct',api.createFinishedProductSchema)
app.post('/createlabourmanager',api.createLabourManagerSchema)
app.post('/createpandamaster',api.createPandaMaster)
app.post('/createnewproduct',api.createNewProduct)
app.get('/getallproductlist',api.getAllProducts)
app.get('/getdatagraph',api.getDistributorGraph)
//app.post('/api/users',api.adminSignup)
//app.post('/createuserregistration',api.createRegisteredUser)

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "ejs");

app.use(express.static("public")); 

// app.get("/", (req,res) => {
//     res.render("login");
// });

// app.get("/signup", (req,res) => {
//     res.render("signup");
// });

// //Register User
// app.post("/signup", async (req,res) => {

//     const data ={
//         email:req.body.email,
//         password:req.body.password
//     }
// const existingUser = await collection.findOne({email:data.email});
// if(existingUser){
//     res.send("user already exists...Please choose a different email");
// }
//   else{
//    // Hash the Password Using bcrypt
//   const saltRounds = 10;// number of saltRounds for bcrypt
//   const hashedPassword = await bcrypt.hash(data.password, saltRounds);
//   data.password = hashedPassword;

//  const userdata = await collection.insertMany(data);
//  console.log(userdata);
// //    res.render("home");
// res.redirect("http://localhost:3000")
   
//   }
//  })
   

// //Login user 
// app.post("/login", async (req,res) => {
     
//     try{
//         const check = await collection.findOne({email:req.body.email});
//         if(!check)
//         {
//             res.send("Email cannot be found");
//         }
//         //compare the hash password from the database with the plain text

//          const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
//          if (isPasswordMatch){
            
//             res.redirect("http://localhost:3000")
//          }
//          else{
//             req.send("wrong password");
//          }
//     }
//     catch{
//            res.send("wrong details");
//     }

//})

app.use("/api/users", userRoutes);
//app.use("/api/auth", userRoutes);

// const router = require("express").Router();


// const { Sign, validate } = require("./Database2/user");
// const bcrypt = require("bcrypt");

// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await Sign.findOne({ email: req.body.email });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new User({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });


// const { User } = require("./Database2/user");
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.email });
// 		if (!user)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const validPassword = await bcrypt.compare(
// 			req.body.password,
// 			user.password
// 		);
// 		if (!validPassword)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const token = user.generateAuthToken();
// 		res.status(200).send({ data: token, message: "logged in successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// const validate = (data) => {
// 	const schema = Joi.object({
// 		email: Joi.string().email().required().label("Email"),
// 		password: Joi.string().required().label("Password"),
// 	});
// 	return schema.validate(data);
// }




const Port = process.env.PORT ||8084;
app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
})


//mongodb://localhost:3000/<database>