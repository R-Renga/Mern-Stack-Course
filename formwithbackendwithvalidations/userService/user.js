const mongoose = require("mongoose");
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    address: {
        type: String,
        trim: true,
        maxlength: [200, "Address cannot exceed 200 characters"]
    },
    age: {
        type: Number,
        min: [0, "Age cannot be negative"],
        max: [150, "Age must be between 0 and 150"],
    },
    dob: {
        type: Date
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    knownlanguages: {
        type: [String],
        enum: {
            values: ["english", "tamil", "hindi"],
            message: "Language must be english, tamil, or hindi"
        }
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: "Gender must be either male or female"
        }
    },
    dropdown: {
        type: String,
        enum: {
            values: ["1", "2", "3"],
            message: "Please select a valid option"
        }
    },
    isactive: {
        type: Boolean,
        default: false
    }
},{
    timestamps:true
});

module.exports = mongoose.model("User",userSchema);