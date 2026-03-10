const { default: mongoose } = require("mongoose");
const user = require("../DevTinder/src/models/user");

employee.insert({name:"raja",age : 46,place:"thanjavur"});

employee.insertMany(
    {name:"raja",age:46,place:"thanajvur"},
    {name:"renga",age:23,palce:"chennai"}
);


employee.find();

employee.find({});

employee.find({department:"it"});

//specific fields
employee.find(
    {department : "IT"},
    {name:1,salary:1,_id :0}
);

employee.find(
    {department:"it"}
).select("name department")


//comparison
//$gt $lt $gte $lte $eq $ne $in $nin


employee.find(
    {salary : {$gt:50}}
);


employee.find({
    department : {$ne:"IT"}
});

employee.find(
    {role:{$in : ["admin","manager"]}}
);






//logical operator

//$and $or $nor $nor

user.find({
$and : [
    {age:56},
    {isActive: true}
]
});

user.find(
    {
        $or : [
            {city : "chennai"},
            {name:"raja"}
        ]
    }
);



//element type

User.find({ email: { $exists: false } });


User.find({ age: { $type: 'number' } });



//update


user.updateOne(
    {_id},
    {$set  : {name:"renga"}}
)


user.updatemany(
    {role:"employee"},
    {$set:{
        isactive : true,
        updatedAt : new Date()
    }}
);

//update operator - unset,rename,push,pull
user.updatemany(
    {department: "it"},
    {$mul:{salary:0.10}}
)

user.updateMany(
    {department:"it"},
    {$inc:{salary:1000}}
)


//aggregation
//match
user.aggregate([
    {$match:{status:"inactive"}}
])

//project

users.aggregate([
    {$project:{
        name : 1,
        email : 1,
        _id : 0
    }}
])
 

//group

users.aggregate([
    {$group : {
        _id : "$department",
        totalsalary : {$sum:"$salary"}
    }}
])

//sort

users.aggregate([
    {$sort: {salary: -1}}
])

//skip

users.aggregate([
    {$skip : 10}
])

//limit
users.aggregate([
    {$limit : 10}
])


//lookup

users.aggregate([
    {$lookup : {
        from:"department",
        localfield: "number",
        foreignfield : "_id",
        as : "users"
    }}
])


const Orderschema = new mongoose.schema({
    firstname :{
        type  :String,
    },
    users  :{
        type : mongoose.schema.Types.ObjectId,
        ref : "Users"
    }
})

Orderschema.find().pouplate("user");


//arithmetic operator

//$sum , $multiply, avg,min,max


employee.aggregate([
    {$group : {
        _id : "$department",
        totalsalary : {$multiply : ["$price","$quantity"]}
    }}
]);

employee.aggregate([
    {$group : {
        _id : "$department",
        minsalary: {$min: "$salary"},
        maxsalary : {$max:"$salary"}
    }}
]);


//schema

const orderSchema = new mongosse.schema(
    {firstname : {
        type :string,
        minlength : [2,"greeater than 2"],
        maxlength : [25,"lesser than 45"],
        required : true,
        unique : true,
        uppercase  :true,
        validate: [validator.isEmail(),"please provide valid mail"],
        enum : {
            values: ["english", "hindi", "tamil"],
           message :"Language must be english, tamil, or hindi"
        }
    }},{
    user :{
        type : mongoose.schema.types.objectid,
        ref :"users"
    }
    }
)

//unwind

// {
//   _id: 1,
//   name: "Rengaraja",
//   skills: ["Node.js", "MongoDB", "React"]
// }


db.users.aggregate([
  { $unwind: "$skills" }
]);

// { _id: 1, name: "Rengaraja", skills: "Node.js" }
// { _id: 1, name: "Rengaraja", skills: "MongoDB" }
// { _id: 1, name: "Rengaraja", skills: "React" }


//1 - second highest salary

employee.find().sort({salary : -1}).skip(1).limit(1)

//2 - remove duplicates based on email

employee.aggregate([
    {$group : {_id:"$email",doc:{$first: "$$ROOT"}}},
    {$replaceroot:{newroot : "$doc"}}
]);

//count
const count = await User.countDocuments();
console.log(count);

const count = await User.countDocuments({ age: { $gt: 25 } });


//pagination

const page = 2;
const limit = 10;

User.find()
  .skip((page - 1) * limit)
  .limit(limit)


  //last 7 days

user.find({
    createdAt  :{$gt : new Date(Date.now() - 7*24*60*60*1000)}
})


user.createIndexes({salary : -1});

user.createIndexes({age:1,city:1});

//composite index,unique index,full text search index,hashed index