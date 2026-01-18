const express  = require('express');


const app = express();


app.get('/webhooks',(req,res)=>{
/*
* secret key logic
* perform based on the logic
*/ 
})

const port = 5001;
app.listen(port,()=>{
    console.log("webhooks node started");
})