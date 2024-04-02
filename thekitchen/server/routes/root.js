// Requires + router
const path = require('path');
const router = require('express').Router();

// Requests
router.get('^/$|/main(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'main.html'));
});

// Export
module.exports = router;