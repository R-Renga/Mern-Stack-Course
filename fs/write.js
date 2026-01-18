const fs = require('fs');

fs.writeFile("large.txt","hello","utf8",(err)=>{
    console.log(err); 
})

fs.writeFileSync("small.txt","hello",(err)=>{
    console.log(err);
    
})