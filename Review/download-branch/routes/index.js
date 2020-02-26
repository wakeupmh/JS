const express = require('express');
const router = express.Router();

router.use('/v1/api', require('./v1'));

module.exports = router;