const express = require("express");
require('dotenv').config();
const connectDB = require("./database");
const userRouter = require("./src/routes/userRoutes")
const authRouter = require("./src/routes/authRoutes")

const app = express();
app.use(express.json());





const auth = (req,res,next) =>{
    //logic 
    next()
}

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("indexjs started");
    })
}).catch((err)=>{
    console.log(err);
})






