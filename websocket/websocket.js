const express = require('express');
const { Server } = require('socket.io');
const http = require("http");



const app = express();

const server = http.createServer(app);

app.use(express.static("public"));


const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("Client connected:", socket.id);
    

    socket.on("message",(data)=>{
         console.log("From client:", data);

        //works with database
        setTimeout(()=>{
            socket.emit("reply", "Hello from server 👋");
        },1000)
         
    })
    
})


server.listen(5000,()=>{
    console.log("server running on port");
})