const express = require('express');
const app = express ();
const port = 2001;
const getConnection = require('./connection');
// const router = require('./routes');
const cors = require("cors");
const bodyParser = require('body-parser');


// middlewares
app.use(bodyParser.json());


getConnection().then ((collections, err) => {
    if (err) {
        console.log('Error while reaching mongodb server',err);
    } else {
        console.log('Mongo Atlas Connection Initiated Successfully');

        app.post('/data/InsertOne', async (req,res)=> {
            try {
                console.log('rrrrrr',typeof(req))
                const data = {
                    userName : req.body.userName,
                    userId : req.body.userId
                }
                const InsertOne = await collections.insertOne(data);
                console.log('Data Inserted Successfully into the MongoDb',InsertOne);
                res.send(data);
            } catch (error) {
                console.log('Error while Inserting the Single Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })

        app.post('/data/InsertMany', async (req,res)=> {
            try {
                if (req.body.length > 0) {
                    const InsertMany = await collections.insertMany(req.body);
                    console.log('Data Inserted Successfully into the MongoDb',InsertMany);
                    res.send(InsertMany);
                }
            } catch (error) {
                console.log('Error while Inserting Multiple Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })


        app.get('/data/fetchData/:id', async (req,res)=> {
            try {
                const fetchAll = await collections.findOne(req.params.id);
                console.log('Data fetched Successfully into the MongoDb',fetchAll);
                res.send(fetchAll);
            } catch (error) {
                console.log('Error while Fetching Particular Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })

        app.put('/data/updateData/:id', async (req,res)=> {
            try {
                console.log('req.params',req.params.id);
                const id = {"_id": `'${req.params.id}'`};
                const updateValue = {
                    $set: req.body
                }
                const options = { upsert: true };            
                const updatebyId = await collections.updateOne(id, updateValue, options);
                if (updatebyId['modifiedCount'] !== 0) {
                    console.log('Data updated Successfully into the MongoDb',updatebyId);
                } else if (updatebyId['upsertedCount'] !== 0) {
                    console.log('New Document Upserted',updatebyId);
                } else {
                    console.log('No Updation Happened into the MongoDb',updatebyId);
                }
                res.send(updatebyId);
            } catch (error) {
                console.log('Error while Fetching Particular Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
        })

        app.put('/data/updateMany', async (req,res)=> {
            try {
                const id = {"userName": "Hari"};
                const updateValue = {
                    $set: req.body
                }
                console.log('id',id);
                console.log('aaaa',updateValue);
                const options = { upsert: true };            
                const updatebyId = await collections.updateMany(id, updateValue, options);
                if (updatebyId['modifiedCount'] !== 0) {
                    console.log('Data updated Successfully into the MongoDb',updatebyId);
                } else if (updatebyId['upsertedCount'] !== 0) {
                    console.log('New Document Upserted',updatebyId);
                } else {
                    console.log('No Updation Happened into the MongoDb',updatebyId);
                }
                res.send(updatebyId);
            } catch (error) {
                console.log('Error while Fetching Particular Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
        })

        app.put('/data/replaceData/:id', async (req,res)=> {
            try {
                const id = {"_id": `${req.params.id}`};
                console.log('id',id);
                const options = { upsert: true };            
                const updatebyId = await collections.replaceOne(id, req.body, options);
                if (updatebyId['modifiedCount'] !== 0) {
                    console.log('Data updated Successfully into the MongoDb',updatebyId);
                } else if (updatebyId['upsertedCount'] !== 0) {
                    console.log('New Document Upserted',updatebyId);
                } else {
                    console.log('No Updation Happened into the MongoDb',updatebyId);
                }
                res.send(updatebyId);
            } catch (error) {
                console.log('Error in Replacing the Values in the Mongo document',error);
            }
        })

        app.delete('/data/deleteData', async (req,res)=> {
            try {
                const fetchAll = await collections.deleteOne(req.body);
                console.log('Data deleted Successfully into the MongoDb',fetchAll);
                res.send(fetchAll);
            } catch (error) {
                console.log('Error while Deleting Particular Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })

        app.delete('/data/deleteMany', async (req,res)=> {
            try {
                const fetchAll = await collections.deleteMany();
                console.log('Data Deleted Successfully into the MongoDb',fetchAll);
                res.send(fetchAll);
            } catch (error) {
                console.log('Error while Deleting All Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })

        app.get('/data/fetchAll', async (req,res)=> {
            try {
                const fetchAll = await collections.find().toArray();
                console.log('Data fetched Successfully into the MongoDb',fetchAll);
                res.send(fetchAll);
            } catch (error) {
                console.log('Error while Fetching Data into the Mongo Db',error);
                res.send(error);
                res.end()
            }
            
        })
        
    }



    app.listen(port, (err) => {
        if (err) {
            console.log(`Error while listening on server Port :${port}`) 
        }
        console.log(`Server Connected Successfully .... Listening on Port: ${port}`)
    })  
}).catch(error => {
    console.log('Error while establishing MongoDb Atlas Connection',error);
})



