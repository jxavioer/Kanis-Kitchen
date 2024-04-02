// Resources: https://mongoosejs.com/docs/

// Requires
const mongoose = require('mongoose');
const passport_mongoose = require('passport-local-mongoose');

// Schema
const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
});

// Plugin for passport
user_schema.plugin(passport_mongoose);

// Export
module.exports = mongoose.model("User", user_schema);