const express = require('express')


const app = express();

app.use(express.json());

app.use((req,res,next)=>{
   const error = new Error("Something went wrong");
   error.status = 500;
   next(error);
})

app.get("/users",(req,res,next)=>{
    res.send("user success")
})

app.use((err, req, res, next) => {
    console.error(err.message);
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    });
  });

app.listen(3001,(req,res)=>{
    console.log("server started");  
})