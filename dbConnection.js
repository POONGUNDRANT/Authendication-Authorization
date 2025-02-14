const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongoDB
const mongoURI = process.env.MONGO_URI;

async function createDbConnection() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = { createDbConnection };