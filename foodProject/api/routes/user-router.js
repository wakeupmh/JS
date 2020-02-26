'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const auth = require('../middlewares/auth');
let  _ctrl = new controller();

router.post('/auth', _ctrl.auth);
router.post('/register', _ctrl.post);

router.get('/',auth, _ctrl.get);
router.get('/:id', auth,_ctrl.getById);
router.post('/', auth, _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;