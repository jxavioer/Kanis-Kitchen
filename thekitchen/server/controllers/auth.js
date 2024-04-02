// Resources: https://www.geeksforgeeks.org/node-js-authentication-using-passportjs-and-passport-local-mongoose/
//            https://www.initialapps.com/properly-logout-passportjs-express-session-for-single-page-app/

// Requires
const passport = require('passport');
const User = require('../schemas/User');
const regex_check = require('../middleware/regex');

// Register handler
const register = (req, res) => {
    // Check if username and password are given and give status if so
    if (!req.body.username || !req.body.password) {
        return res.status(400).send('Both username and password are required');
    }

    // Perform regex checks
    // TODO: Possible change of regex?
    if (!regex_check(req, res)) {return;}


    // Call register from passport-local-mongoose, passing the username to the schema, and the password to the function
    User.register(new User({username: req.body.username }), req.body.password, function (err, user) { 
        // If there is an error, send the error
        if (err) { 
            return res.status(500).send(`Error: ${err.message}`); 
        } 
        // Log the user in after registration
        req.login(user, (er) => { 
            // If there is an error, send 500 status code, otherwise send 200 status code
            return er ? res.status(500).send("Error logging in after registration.") : res.status(200).send("User registered successfully"); 
        }); 
    }); 
}

// Login handler
const login = (req, res) => {
    // Check if the username or password is not given
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("All fields are required.");
    }

    // Authenticate the user using passport local strategy
    passport.authenticate("local", (err, user, info) => { 
        // If there is an error, send the error
        if (err) { 
            return res.status(500).send(`Error: ${err.messge}`);
        } 
        
        // If the user is not found, send 400 status code
        if (!user) { 
            return res.status(400).send("Authentication failed, please check your username and password."); 
        // If the user is found, sign a token and send it back
        } else { 
            req.logIn(user, function(err) {
                if (err) { 
                    return res.status(500).send(`Error: ${err.messge}`);
                }
                return res.status(200).send("Logged in successfully"); 
            });
        } 
    })(req, res);     
}

// Logout
const logout = (req, res) => {
    // Check if the user is not logged in
    if (!req.user) {
        return res.status(400).send("There is no user logged in.");
    }
    // Clear cookies
    res.clearCookie("connect.sid");
    // Log the user out
    req.logout( (err) => {
        // If there is an error, send a 500 status code
        if (err) { 
            return res.status(500).send(`${err.name}: ${err.message}`);
        }
        // Destroy the session, and send a 200 status code
        req.session.destroy((err) => {
            // If there is an error, send a 500 status code
            return err ? res.status(500).send(`${err.name}: ${err.message}`) : res.status(200).send("Logged out successfully");
        });
    });
}

// Export
module.exports = {login, logout, register}