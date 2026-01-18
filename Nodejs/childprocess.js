const { fork } = require("child_process");

const numCPUs = 4; // Number of child processes (can be CPU cores)
const basePort = 3000; // Start from port 3000

for (let i = 0; i < numCPUs; i++) {
    const port = basePort + i; // Assign different ports to each child
    const child = fork("child.js"); // Create a child process

    child.send({ port }); // Send the port number to the child process

    child.on("message", (message) => {
        console.log(`Parent received from Child ${child.pid}: ${message}`);
    });
}


const http = require("http");

process.on("message", ({ port }) => {
    const server = http.createServer((req, res) => {
        res.end(`Response from Child Process ${process.pid} on Port ${port}`);
    });

    server.listen(port, () => {
        console.log(`Child Process ${process.pid} listening on port ${port}`);
        process.send(`Listening on port ${port}`);
    });
});



const { fork } = require("child_process");

const child = fork("./childTask.js");

child.on("message", (message) => {
    console.log(`Received from child: ${message}`);
});

child.send("start-task");


process.on("message", (msg) => {
    if (msg === "start-task") {
        let result = "Heavy Task Done!";
        process.send(result);
    }
});
