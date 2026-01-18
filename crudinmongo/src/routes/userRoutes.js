const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

userRouter.post("/user", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      email,
      knownlanguages,
      age,
      password,
    } = req.body;
    const user = new User({
      firstName,
      lastName,
      address,
      email,
      knownlanguages,
      age,
      password,
    });
    const data = await user.save();
    res.status(201).json({
      result: data,
      message: "data insert success",
      success: true,
    });
  } catch (error) {
    res.status(500).send("error");
  }
});

userRouter.get("/alluser", async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).json({
      result: data,
      message: "data insert success",
      success: true,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

userRouter.put("/updateuser", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndUpdate(
      id,
      { age: "28", lastName: "ramammorthy" },
      { new: true, runValidators: true }
    );
    // const update = await User.updateOne(
    //     { _id: id },
    //     { $set: { age: 40 } }
    //   );
    res.status(201).json({
      result: data,
      message: "data insert success",
      success: true,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

userRouter.delete("/delete", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(id);
    console.log(deleted);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

module.exports = userRouter;
