const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    DOB: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('dataSchema',dataSchema);