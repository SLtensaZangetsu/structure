const {dotenv} = require('dotenv');
const mongoose = require('mongoose');
//
const MongoDB_URL = process.env.MongoDB_URL;

mongoose.connect(process.env.MongoDB_URL)

try{
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
}
catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

module.exports = mongoose;