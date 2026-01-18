const fs = require('fs');

fs.appendFile("large.txt","hello","utf8",(err)=>{
    console.log(err); 
})