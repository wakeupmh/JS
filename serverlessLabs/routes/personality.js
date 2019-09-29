const express = require('express');
const router = express.Router();
const controller = require('../controllers/personalityController')
router.post('api/personality-insight/', controller.post);
module.exports = router;