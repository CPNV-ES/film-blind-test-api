const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

// All routes require authentication
router.use(authenticate);

router.get('/', userController.getUserInfo);
router.get('/scores', userController.getUserScores);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;