const {MongoClient} = require('mongodb');


const url = 'mongodb+srv://rengaraja2608:0ihS3to19co9oAvv@namasterenga.twmnsxd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);


const data = [{
    "firstname":"ajay",
    "lastname":"prasath",
    "age":30,
     "place":"thirumangalam"
},{
    
        "firstname":"hari",
        "lastname":"haran",
        "age":26,
         "place":"salem"
    
}]

const result = {
    
    "firstname":"vikram",
    "lastname":"kathir",
    "age":26,
     "place":"rajapalayam"

}



async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db("NamasteReact");
    const collection = await db.collection("Test");
    
    //crud
    const insertMany = await collection.insertMany(data);
    console.log("insert Many record",insertMany);

    //Insertone
    const insertOne = await collection.insertOne(result);
    console.log("insert insertOne record",insertOne);

    //read all
    const allDocuments = await collection.find({}).toArray();
    console.log("alldocuments",allDocuments);

    //get filter record
    const filterRecord = await collection.find({"firstname":"vikram"}).toArray()
    console.log("filterRecord",filterRecord);

    //updateone - only change the first document that match the first filter
    const updateResult = await collection.updateOne({ place: "salem" }, {$set:{place:"chennai"}});
    console.log('Updated documents =>', updateResult);

    //updateALL
    const updateMany = await collection.updateMany({ place: "thirumangalam" }, {$set:{place:"madurai"}});
    console.log('Updated documents =>', updateMany);



    //deletemany
    const deleteResult = await collection.deleteMany({ place:"madurai" });
    console.log('Deleted documents =>', deleteResult);

    //count
    const countDocuments = await collection.countDocuments({});
    console.log("countDocuments",countDocuments);

    //bulkWrite
    const results = await users.bulkWrite([
        { insertOne: { document: { name: "Rengaraja", city: "Madurai" } } },
        { updateOne: { filter: { name: "John" }, update: { $set: { city: "Chennai" } } } },
        { deleteOne: { filter: { name: "Doe" } } }
      ]);

    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());