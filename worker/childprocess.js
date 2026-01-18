const {fork} = require('child_process');

const child = fork("./helperchild")

child.send({number:10});

child.on("message",(data)=>{
    console.log(data);
    
})

child.on("exit",()=>{
    console.log("child process finished");
})




