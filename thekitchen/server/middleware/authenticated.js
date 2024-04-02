// Resources https://www.passportjs.org/

// Authentication check
const authenticated = (req, res, next) => {
    // If the user is authenticated, continue
    if (req.isAuthenticated()) {
        return next();
    }
    // If the user is not authenticated, send 401 status code
    return res.status(401).send('Unauthorized');
}

// Export
module.exports = authenticated;