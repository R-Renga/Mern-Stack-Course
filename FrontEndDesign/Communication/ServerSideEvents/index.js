const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write("data: Welcome\n\n");  // Correct SSE message format

    const intervalID = setInterval(() => {
        res.write(`data: New update - ${new Date().toLocaleString()}\n\n`);
    }, 5000);
    
    req.on('close', () => {
        clearInterval(intervalID);
    });
});

const port = 5001;
app.listen(port, () => {
    console.log("Running on port", port);
});
