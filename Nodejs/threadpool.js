const crypto = require('crypto');


crypto.pbkdf2("password","salt",500000,40,"sha512",(err,data)=>{
    console.log(data.toString('hex'));
});



