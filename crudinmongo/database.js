const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');

// const client = new MongoClient(url);
// await client.connect();
// const db = await client.db("NamasteReact");
// const collection = await db.collection("Test");

const connectDB = async() =>{
    await mongoose.connect(process.env.DB_CONNECTION_SECRET)
}

module.exports = connectDB;



// const { MongoClient } = require("mongodb");

// const client = new MongoClient(process.env.DB_CONNECTION_SECRET);

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("MongoClient Connected");
//     return client.db("NamasteReact"); // change DB name
//   } catch (error) {
//     console.error("DB Connection Error:", error);
//   }
// }

// module.exports = connectDB;
