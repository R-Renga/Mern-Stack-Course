const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/getdata',async (req,res)=>{
    const result = await fetch('https://dummyjson.com/todos')
    const data = await result.json();
    res.send(data)
})

const port = 5001
app.listen(port,()=>{
console.log("running on port ",port);
})