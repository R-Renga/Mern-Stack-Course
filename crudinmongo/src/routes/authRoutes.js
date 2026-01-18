const express = require("express");
const  getDB = require("../../database");

const authRouter = express.Router();



authRouter.post("/user", async (req, res) => {
  try {
    const db = await getDB();
    const result = await db.collection("users").insertOne({
        firstName: "Raja",
        lastName: "Kumar",
        email: "raja@gmail.com",
        knownlanguages: ["tamil"],
        age: 25,
        password: "123456"
      });
    
      console.log("Inserted:", result.insertedId);

    res.status(201).json({
      result: data,
      message: "User inserted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});


// GET ALL USERS (GET)
authRouter.get("/alluser", async (req, res) => {
  try {
    const db = await getDB();
    const data = await db.collection("users").find().toArray();

    res.status(200).json({
      result: data,
      message: "Users fetched successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});


// UPDATE USER (PUT)
authRouter.put("/updateuser/:id", async (req, res) => {
  try {
    const db = await getDB();
    const id = req.params.id;

    const data = await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          age: 28,
          lastName: "ramamorthy",
        },
      }
    );

    res.status(200).json({
      result: data,
      message: "User updated successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});


// DELETE USER (DELETE)
authRouter.delete("/delete/:id", async (req, res) => {
  try {
    const db = await getDB();
    const id = req.params.id;

    const deleted = await db.collection("users").deleteOne({
      _id: new ObjectId(id),
    });

    res.status(200).json({
      message: "User deleted successfully",
      result: deleted,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = authRouter;
