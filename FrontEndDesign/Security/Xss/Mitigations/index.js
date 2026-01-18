const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

//middleware

app.use((req,res,next)=>{
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'nonce-randomKey' http://unsecure.com:" 
    )
    
    next();
})

app,use(express.static('Public')); // exposing public folder

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


const port = 5001
app.listen(port,()=>{
console.log("running on port ",port);
})