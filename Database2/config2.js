const mongoose = require('mongoose')
module.exports={
    connect:()=>{
        const MongoUri = "mongodb+srv://abhilash:abhilash1234@bookstore.mt4fni0.mongodb.net/"

        mongoose.connect(MongoUri
            
        ).then (()=>{
            console.log('connected to DB');
        }).catch((error)=>{
            console.log(`cought an ${error}`);
        })
    }
}