const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    address: {
      type: String,
      trim: true,
      maxlength: [200, "Address cannot exceed 200 characters"],
    },
    email: {
      type: String,
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "please provide valid mail"],
    },
    knownlanguages: {
      type: [String],
      enum: {
        values: ["english", "hindi", "tamil"],
        message: "Language must be english, tamil, or hindi",
      },
    },
    age: {
      type: Number,
      min: [0, "Age cannot be negative"],
      max: [150, "Age must be between 0 and 150"],
      default: 0,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =  mongoose.model("User",userSchema)
