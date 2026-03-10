const fs = require('fs');

fs.readFile("large.txt","utf8",(err,data)=>{
    if(err) return err;
    console.log(data);
    
})

fs.readFileSync("large.txt","utf8",(err,data)=>{
    if(err) return err;
    console.log(data);
    
})

