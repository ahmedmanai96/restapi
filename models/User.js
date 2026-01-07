const mongoose = require('mongoose');

// Define the Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number
});

// Export so server.js can use it
module.exports = mongoose.model('User', userSchema);