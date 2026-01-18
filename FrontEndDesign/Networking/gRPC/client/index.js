const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    client.getAll(null, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(data.customers);
    });
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
