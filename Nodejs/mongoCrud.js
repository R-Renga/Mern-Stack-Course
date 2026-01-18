const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb+srv://rengaraja2608:0ihS3to19co9oAvv@namasterenga.twmnsxd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "NamasteReact";
const collectionName = "Test";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

// Connect to DB when server starts
connectDB();

// Insert Many Documents
app.post('/api/insert-many', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const data = req.body;
        const result = await collection.insertMany(data);
        res.status(200).json({ message: "Documents inserted successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Insert One Document
app.post('/api/insert-one', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const data = req.body;
        const result = await collection.insertOne(data);
        res.status(200).json({ message: "Document inserted successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read All Documents
app.get('/api/documents', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Filter Documents by Firstname
app.get('/api/documents/:firstname', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find({ firstname: req.params.firstname }).toArray();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update One Document
app.put('/api/update-one', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const { filter, update } = req.body;
        const result = await collection.updateOne(filter, { $set: update });
        res.status(200).json({ message: "Document updated successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Many Documents
app.put('/api/update-many', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const { filter, update } = req.body;
        const result = await collection.updateMany(filter, { $set: update });
        res.status(200).json({ message: "Documents updated successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Many Documents
app.delete('/api/delete-many', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const filter = req.body;
        const result = await collection.deleteMany(filter);
        res.status(200).json({ message: "Documents deleted successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Count Documents
app.get('/api/count', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const count = await collection.countDocuments({});
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Handle graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received. Closing MongoDB connection...');
    await client.close();
    process.exit(0);
});