const {workerData,parentPort} = require('worker_threads');


function heavytask(data){
    let sum = 0;
    for(let i=0;i<5;i++){
        sum = data + i
    }
    return sum
}


let result = heavytask(workerData);
console.log(result);
parentPort.postMessage(result)
