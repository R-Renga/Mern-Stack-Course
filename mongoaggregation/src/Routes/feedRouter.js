const express = require("express");
const User = require("../models/user");
const { auth } = require("../middleware/auth");

const feedRouter = express.Router();

feedRouter.get("/feed",auth, async (req, res) => {
  try {
    const users = await User.find({}).lean();
    console.log(users);
    res.status(200).json({
      data: users,
      message: "suceess",
      count: users.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

feedRouter.get("/feedbybatch", async (req, res) => {
  const page = parseInt(req.query.page); //2
  const limit = parseInt(req.query.limit); // 10
  const skip = (page - 1) * limit; //2*10 - 20

  const users = await User.find({}).select("username").limit(limit).skip(skip);

  res.status(200).json({
    data: users,
    message: "suceess",
  });
});

feedRouter.get("/feedbyoperator", async (req, res) => {
  const users = await User.find({
    $and: [
      {
        department: "mech",
      },
      { salary: { $gt: 10000 } },
    ],
  });
  res.status(200).json({
    data: users,
    message: "suceess",
  });
});

feedRouter.get("/feedbygreater",async(req,res)=>{
    const users = await User.find({
        salary:{$gt:10000}    
    })
    res.status(200).json({
        data: users,
        message: "suceess",
      });
});


feedRouter.put("/incrementsalary",async(req,res)=>{
    const users = await User.updateMany({department:"IT"},{$mul:{salary:0.10}})
    res.status(200).json({
        data: users,
        message: "suceess",
      });
});

feedRouter.get("/feedmatch",async(req,res)=>{
    const users = await User.aggregate([{
       $match:{department:"eee"}
    }])
    res.status(200).json({
        data: users,
        message: "suceess",
      });
});

feedRouter.get("/feedgroup",async(req,res)=>{
    const users = await User.aggregate([{
       $group:{_id:"$department",totalsalary:{$sum : "$salary"}}
    },{ $sort: { totalsalary: -1 } }])
    res.status(200).json({
        data: users,
        message: "suceess",
      });
});




module.exports = feedRouter;
