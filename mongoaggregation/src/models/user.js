const mongoose = require("mongoose");
const validator = require("validator");

const UserScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    minlength: [2, "length must be greater than 2 characters"],
    maxlength: [150, "lenght must be smaller than"],
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "please provide an correct email"],
  },
  salary: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  increment: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  password:{
    type:String
  },
  department: {
    type: String,
    validate(value) {
      if (!["it", "eee", "mech"].includes(value)) {
        throw new Error("department must be valid");
      }
    },
  },
  knownlanguage: {
    type: [String],
    enum: {
      values: ["english", "hindi", "tamil"],
      message: "Language must be english, tamil, or hindi",
    },
  },
});

module.exports = mongoose.model("User",UserScheme)
