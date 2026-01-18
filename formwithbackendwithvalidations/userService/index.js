const express = require('express');
const cors = require("cors");
const connectDB = require("./database")
require('dotenv').config();
const User = require("./user")
const validator = require('validator')



const app = express();
app.use(express.json())



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

// Error handling middleware
const handleValidationError = (err, res) => {
    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }
    return null;
};

app.post("/users", async (req, res) => {
    try {
        const body = req.body;
        console.log("Received data:", body);

      
        if (!body.name || body.name.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }

        if (!body.email || body.email.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        if (!validator.isEmail(body.email)) {
            return res.status(400).json({
                success: false,
                message: "Email format is invalid"
            });
        }

        if (body.age && (body.age < 0 || body.age > 150)) {
            return res.status(400).json({
                success: false,
                message: "Age must be between 0 and 150"
            });
        }

        // Create new user document
        const user = new User({
            name: body.name,
            address: body.address,
            age: body.age,
            dob: body.dob,
            email: body.email,
            knownlanguages: body.knownlanguages,   // FIXED
            gender: body.gender,
            dropdown: body.dropdown,               // FIXED
            isActive: body.isActive                // FIXED
        });;

        // Save user (mongoose schema validation will run here)
        const savedUser = await user.save();

        console.log("User saved successfully:", savedUser);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: savedUser
        });

    } catch (error) {
        console.error("Error:", error);

        // Handle mongoose validation errors
        const validationResult = handleValidationError(error, res);
        if (validationResult) return;

        // Generic error response
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
});


app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching users",
            error: error.message
        });
    }
});



connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server started");
    })
}).catch((err)=>{
    console.log(err);
})