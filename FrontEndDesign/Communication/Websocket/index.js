const express = require('express');
const bodyparser = require('body-parser');
const {Server} = require('socket.io')
const { createServer } = require('http');


const app = express();
const server = createServer(app)
const io = new Server(server)



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


io.on('connection',(socket)=>{
    console.log('connection successfully');

    socket.on('chat message',(msg)=>{
        console.log(msg,"recieveedmsg");
        io.emit('chat message',msg);
    })

    socket.on('disconnect',()=>{
        console.log("connection disconnected");
    })
});


const port = 5001
server.listen(port,()=>{
console.log("running on port ",port);
})