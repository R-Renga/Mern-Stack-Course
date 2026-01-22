const express = require("express");
const connectDB = require("./database");
const userRouter = require("./src/Routes/userRouter");
const feedRouter = require("./src/Routes/feedRouter");
const cookies = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cookies());
app.use("/",userRouter)
app.use("/",feedRouter)

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("server started at port 5000");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
