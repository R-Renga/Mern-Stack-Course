const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

let data = 'Initial Data';
let waitingClients = [];
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/getdata', (req,res)=>{
    if(data !== req.query.lastdata){
        res.json({data})
    }else{
        // i needs to wait until data get updated also i need to give response to the respective client request 
        waitingClients.push(res)
    }
})

app.get('/updatedata',(req,res)=>{
   data = req.query.data
    console.log(waitingClients);
   while(waitingClients.length > 0){
    const client = waitingClients.shift();// to get the first request
    client.json({data})
    console.log(client);
   }

   res.send({success:"dataupdated"})
})

const port = 5001
app.listen(port,()=>{
console.log("running on port ",port);
})