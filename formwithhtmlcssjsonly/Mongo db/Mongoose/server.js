const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 2001;
const getConnection = require('./DbConnections/connection');
const routerAPI = require('./routes');
const cors = require("cors");

app.use(cors)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

getConnection()
// .then((dT) => {

    app.use(routerAPI);

    app.listen(port, (err) => {
        if (err) {
            console.log('Error occurs while starting up the Server',err);
        } else {
            console.log(`Server is listening on Port .... http://localhost:${port}`);
        }
    })
// }).catch((error) => {
//     console.log('Error Occurs while getting the connection of mongodb',error);
// })

