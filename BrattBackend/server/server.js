// Resources: https://expressjs.com/
//            https://www.npmjs.com/
//            https://www.passportjs.org/docs/

// Requires
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors_options = require('./config/cors_options');
const db_connection = require('./config/database_connection');
const {requests_handler, error_handler} = require('./middleware/logger');
const passport = require('passport');
const passport_strategy = require('passport-local').Strategy;
const express_session = require('express-session');
const User = require('./schemas/User');

// Initialize express, port, database connection, and ejs
const app = express();
const port = process.env.PORT || 5000;
db_connection();

// Middleware
app.use(requests_handler);
app.use(cors(cors_options));
app.use(express.json());
app.use(cookieParser());
app.use(express_session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true for HTTPS
        httpOnly: true,
        maxAge: 60 * 1000 // Hour * Minute * Second * Millisecond = 10 seconds
    }
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passport_strategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/', require(path.join(__dirname, 'routes', 'root')));
app.use('/auth', require(path.join(__dirname, 'routes', 'auth')));
app.use('/users', require(path.join(__dirname, 'routes', 'users'))); 

// Catch 404
app.all('*', (req, res) => {
    res.status(404).send('404: Page not found');
});

// Error handling
app.use(error_handler);

// Listen
mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
})

// Error handling
mongoose.connection.on('error', (error) => {
    error_handler(error);
})