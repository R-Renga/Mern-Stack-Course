const fs = require("fs");


const readstream = fs.createReadStream("file.txt");

readstream.on("data",(chunk)=>{
    console.log(chunk); 
})

readstream.on("end",(chunk)=>{
    console.log(chunk); 
})

readstream.on("err",(chunk)=>{
    console.err(chunk); 
})


fs.createReadStream("large.txt").pipe(fs.createWriteStream("new.file"))