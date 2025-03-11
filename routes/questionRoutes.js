const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { authenticate } = require('../middleware/auth');

// All routes require authentication
router.use(authenticate);

router.get('/', questionController.getRandomQuestion);
router.get('/:id', questionController.getQuestionAnswer);

module.exports = router;