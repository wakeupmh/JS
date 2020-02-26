const express = require('express');
const router = express.Router();

router.use('/', require('./downloadBranch'));

module.exports = router;