const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scoreController');
const { authenticate } = require('../middleware/auth');

// All routes require authentication
router.use(authenticate);

router.get('/', scoreController.getTopScores);
router.post('/', scoreController.addScore);

module.exports = router;