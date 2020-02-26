const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/downloadBranch');

router.post('/download-branch', ctrl.download);

module.exports = router;