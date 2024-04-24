// Router
const router = require('express').Router();
const auth = require('../controllers/auth');
const rate_limiter = require('../middleware/rate_limiter');

// Routes
router.post('/login', rate_limiter, auth.login);
router.post('/register', rate_limiter, auth.register);
router.post('/logout', auth.logout);

// Export
module.exports = router;