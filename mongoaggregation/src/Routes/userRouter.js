const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    //validate data req.body
    console.log(req.body);
    const {
      username,
      email,
      salary,
      discount,
      increment,
      tax,
      password,
      department,
      knownlanguage,
    } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      salary,
      discount,
      increment,
      tax,
      password: passwordHash,
      department,
      knownlanguage,
    });
    await user.validate();
    const savedUser = await user.save();
    const decoded = await jwt.sign(
      {
        id: savedUser._id,
      },
      "renga@123",
      { expiresIn: "1h" }
    );
    res.cookie("token", decoded, {
      secure: false,
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.json({
      data: savedUser,
      message: "data saved successfully",
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
      status: "failure",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      const decoded = await jwt.sign(
        {
          id: user._id,
        },
        "renga@123",
        { expiresIn: "1h" }
      );
      res.cookie("token", decoded, {
        secure: false,
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000,
      });
    } else {
      throw new Error("invalid password");
    }
  } catch (error) {
    console.log("error record", error);
    res.status(400).send("error message" + error.message);
  }
});

userRouter.post("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
  });
  res.send("logout successfully");
});

module.exports = userRouter;
