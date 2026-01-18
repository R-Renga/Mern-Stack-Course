const { Worker } = require('node:worker_threads');

let a = 34, b = 75;

const sumFunction = `
const { parentPort, workerData } = require('node:worker_threads');

// Extract data
const { a, b } = workerData;

// Perform the sum operation
function sum(a, b) {  
    try {
        let result = a + b;
        parentPort.postMessage(result);
    } catch (error) {
        console.error(error);
        parentPort.postMessage("error");
    }
}

// Call the function
sum(a, b);
`;

let worker = new Worker(sumFunction, { eval: true, workerData: { a, b } });

worker.on("message", (message) => {
    console.log("Sum:", message);
});

worker.on("error", (err) => {
    console.error("Worker Error:", err);
});

worker.on("exit", (code) => {
    if (code !== 0) console.error(`Worker exited with code ${code}`);
});
