// Resources: https://mongoosejs.com/docs/
//            https://www.npmjs.com/package/passport-local-mongoose

// Imports
const User = require('../schemas/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt'); 
const regex_check = require('../middleware/regex');

// Get all users
const getUsers = asyncHandler(async (req, res, next) => {
    // Get all users
    const users = await User.find();

    // If users are found, return them, else users weren't found
    return users.length ? res.json(users) : res.status(400).send('No users found');
});

// Create a user
const createUser = asyncHandler(async (req, res, next) => {
    // Check if username and password are given and give status if so
    if (!req.body.username || !req.body.password) {
        return res.status(400).send('Both username and password are required');
    }

    // Check for duplicates
    if (await User.findByUsername(req.body.username)) {
        return res.status(409).send('User already exists');
    }

    // Perform regex checks
    if (regex_check(req, res) !== true) {return;}

    // Call register from passport-local-mongoose, passing the username to the schema, and the password to the function
    User.register(new User({username: req.body.password }), req.body.password, function (err, user) { 
        // If there is an error, send the error
        if (err) { 
            return res.status(500).send(`Error: ${err.message}`); 
        } 
        // Return
        return res.status(200).send("User registered successfully");
    }); 
});

// Update a user
const updateUser = asyncHandler(async (req, res, next) => {
    // Check if id is given
    if (!req.body._id) {
        return res.status(400).send('ID is required');
    }

    // Find the user and its potential duplicate
    const user = await User.findById(req.body._id).exec();
    const duplicate = req.body.username ? await User.findByUsername(req.body.username) : null;

    // Check if an user was found
    if (!user) {
        return res.status(400).send('User not found');
    // Check if a duplicate was found
    } else if (duplicate && duplicate._id.toString() !== req.body._id) {
        return res.status(409).send('User already exists');
    }

    // If username is given, save it
    if (req.body.username) {
        user.username = req.body.username;
    }

    // If password is given, hash it and save
    await user.changePassword(req.body.oldPassword, req.body.newPassword);

    // Save the user
    await user.save();

    // Send status
    res.status(200).send(`User "${user.username}" updated`);
});

// Delete a user
const deleteUser = asyncHandler(async (req, res, next) => {
    // Check if id is given
    if (!req.body._id) {
        return res.status(400).send('ID is required');
    }

    // Find the user
    const user = await User.findById(req.body._id).exec();

    // Check if an user was found
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Delete the user
    await user.deleteOne();

    // Send status
    res.status(200).send(`[ID: ${req.body._id}] Username: "${user.username}" deleted`);
});

// Export
module.exports = {getUsers, createUser, updateUser, deleteUser};