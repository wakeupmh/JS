const express = require('express');
const router = express.Router();
const controller = require('../controllers/poetryController')
router.post('/get-poetry/', controller.post);
module.exports = router;