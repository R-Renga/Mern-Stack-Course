const fs = require('fs');

fs.readFile("large.txt","hello","utf8",(err,data)=>{
    if(err) return err;
    console.log(data);
    
})

fs.readFileSync("large.txt","hello","utf8",(err,data)=>{
    if(err) return err;
    console.log(data);
    
})