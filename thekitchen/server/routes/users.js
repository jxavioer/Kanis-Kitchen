// Requires + router
const router = require('express').Router();
const users_controller = require('../controllers/users');
const authenticated = require('../middleware/authenticated');

// User model
router.get('', authenticated, users_controller.getUsers);
router.post('', authenticated, users_controller.createUser);
router.put('', authenticated, users_controller.updateUser);
router.delete('', authenticated, users_controller.deleteUser);

// Export
module.exports = router;