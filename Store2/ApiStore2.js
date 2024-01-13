const express = require('express')
 const bodyarser = require('body-parser')
 const Distri = require('../Database2/Schema2')
 const Material = require('../Database2/Schema3')
 const Finished = require('../Database2/Schema4')
 const Manage = require('../Database2/Schema5')
 const PM = require('../Database2/Panda')
 const Addproduct = require('../Database2/Addproductschema')
 //const Signu = require('../Database2/user')
 const jwt = require("jsonwebtoken");
 require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');
 const app = express()
 app.use(cors());
 app.use(bodyParser.json())
 const secretKey = 'AdminKeyOrchyvufbvufbvfvjdfkvjfuvkbvibuvfibvifkvsdovvfnfubvb'; // Use a default value if not set
 //For all data fetch
//  const getAllBooks = async (req,res) =>{
//  try{
//     const books = await Books.find({})
//     res.json(books)
//  }
//  catch(error){

//     res.status(500).json({error:'unable to find books'})
//  }
// }

//For Create
const createBook = async (req,res)=>{
    try{
        const distri = new Distri(req.body)
        
        const savedBook = await distri.save();
        res.json(savedBook)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}

const createRawMaterialSchema = async (req,res)=>{
    try{
        const material = new Material(req.body)
        
        const savedMaterial = await material.save();
        res.json(savedMaterial)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}


const createFinishedProductSchema = async (req,res)=>{
    try{
        const finished = new Finished(req.body)
        
        const savedFinished = await finished.save();
        res.json(savedFinished)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}

const createLabourManagerSchema = async (req,res)=>{
    try{
        const manager = new Manage(req.body)
        
        const savedManager = await manager.save();
        res.json(savedManager)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}


const createPandaMaster = async (req,res)=>{
    try{
        const pm = new PM(req.body)
        
        const savedPanda = await pm.save();
        res.json(savedPanda)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}

const createNewProduct = async (req,res)=>{
    try{
        const ap = new Addproduct(req.body)
        
        const savedProduct = await ap.save();
        res.json(savedProduct)
    }
    catch(error){
        res.status(400).json({error:'unable to create'})
    }
}

const getAllProducts = async (req,res) =>{
     try{
         const getproducts = await Addproduct.find({})
         res.json(getproducts)
      }
      catch(error){
    
         res.status(500).json({error:'unable to find books'})
      }
     }

     const getDistributorGraph = async (req,res) =>{
        try{
            const getgraph = await Distri.find({})
        
            const sumValue1 = getgraph.reduce((acc, record) => acc + record.sellingprice, 0);
            const sumValue2 = getgraph.reduce((acc, record) => acc + record.profitmargin, 0);
            res.json({ sumValue1, sumValue2 });
            //res.json(getgraph)
         }
         catch(error){
        
            res.status(500).json({error:'unable to find books'})
         }
        }

// const createRegisteredUser= async (req,res)=>{
//     try{
//         const userSignup = new Signu(req.body)
        
//         const savedUserSignup = await userSignup.save();
//         res.json(savedUserSignup)
//     }
//     catch(error){
//         res.status(400).json({error:'unable to create'})
//     }
// }

//const router = require("express").Router();
// const { Sign, validate } = require("../Database2/user");
// const bcrypt = require("bcrypt");

// const adminSignup = async (req, res) => {
//     try {
//       const { error } = validate(req.body);
  
//       if (error) {
//         return res.status(400).send({ message: error.details[0].message });
//       }
  
//       const existingUser = await Sign.findOne({ email: req.body.email });
  
//       if (existingUser) {
//         return res.status(409).send({ message: "User with given email already exists!" });
//       }
  
//       const salt = await bcrypt.genSalt(Number(process.env.SALT));
//       const hashPassword = await bcrypt.hash(req.body.password, salt);
  
//       // Create a new user with hashed password
//       const newUser = new Sign({ ...req.body, password: hashPassword });
//       await newUser.save();
  
//       // Generate a token for the new user
//       const token = jwt.sign({ userId: newUser._id, email: newUser.email }, secretKey, { expiresIn: '7h' });
  
//       res.status(201).send({ message: "User created successfully", token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ message: "Internal Code Server Error" });
//     }
//   };


module.exports={
    app,
    createBook,
    createRawMaterialSchema,
    createFinishedProductSchema,
    createLabourManagerSchema,
    createPandaMaster,
    createNewProduct,
    getAllProducts,
    getDistributorGraph
    
}