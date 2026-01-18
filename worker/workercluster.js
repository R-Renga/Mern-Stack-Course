const cluster = require('cluster');
const os = require("os");
const express = require('express');


const app  = express();

if(cluster.isPrimary){
    const noCPUs = os.cpus().length
    console.log(noCPUs);
    for(let i=0;i<noCPUs;i++){
        cluster.fork()
    }
    cluster.on("exit",()=>{
        cluster.fork();
    })
}else{
    app.listen(2000,()=>{
        console.log("SERVER IS STARTED");     
    })
}