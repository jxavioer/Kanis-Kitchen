// Resources: https://mongoosejs.com/docs/

// Imports
const mongoose = require('mongoose');
const {error_handler} = require('../middleware/logger');

// Database connection
const database_connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (err) {
        error_handler(err);
    }
};

// Export
module.exports = database_connection;