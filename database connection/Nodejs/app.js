// import { postgres } from "./Postgres/index.js";
// import { oracle } from "./Oracle/index.js";
// console.log("main node is started");

// postgres();
// oracle();



// app.use("/",(req,res)=>{
//     res.send("raja")
// });

// app.get("/hello",(req,res)=>{
//     res.send("hello")
// })  

// localStorage.getItem("username","renga")

const express = require('express')


const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  console.log("/");
  res.send("/")
})

app.get("/users",(req,res)=>{
  const name = req.query.name;
  http://localhost:5000/users?name=raja&age=28
  console.log("raja");
  res.send("updated")
})

app.listen(5000,()=>{
  console.log("node started");
  
})


//get not works like use