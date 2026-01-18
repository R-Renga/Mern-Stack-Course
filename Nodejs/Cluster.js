const cluster = require('node:cluster');
const os = require('os');
const express = require('express');


if(cluster.isPrimary){

    const numCpus = os.cpus().length;
    console.log(numCpus);
    console.log(`primary process ${process.pid}`);

    for(i=0;i<numCpus;i++){
        cluster.fork();
    }

    //restart cluster
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    })

}else{

    const app = express();

    app.get("/", (req, res) => {
      res.send(`Response from Worker PID: ${process.pid}`);
    });
  
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Worker started: PID ${process.pid}, Listening on port ${PORT}`);
    });

}