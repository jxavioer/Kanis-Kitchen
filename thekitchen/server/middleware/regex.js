// Regex check
const regex_check = (req, res) => {
    if (!/(?=.*[A-Z])[A-Za-z0-9]{8,64}/.test(req.body.username)) {
        return res.status(400).send("Username must be between 8 and 64 alphanumeric characters long, and contain at least one uppercase letter.");
    // Perform regex check on the password
    } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,128}/.test(req.body.password)){
        return res.status(400).send("Password must be between 8 and 128 characters long, contain at least one uppercase letter, and one special character.");
    }
    return true;
}

// Export
module.exports = regex_check;