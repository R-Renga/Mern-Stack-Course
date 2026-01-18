const {Worker} = require('worker_threads');

function worker (data){
  const worker = new Worker("./helperfilethread",{
    workerData:data
  })

  worker.on("message",(result)=>{
    console.log(result);
  })

  worker.on("error",reject)
//   worker.on("exit",reject)
   worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
}

(async()=>{
    worker(10)
})()

