'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const auth = require('../middlewares/auth');
let  _ctrl = new controller();

router.get('/',auth, _ctrl.get);
router.get('/:id',_ctrl.getById);
router.get('/idCateg/:id',_ctrl.getByIdCateg);
router.post('/',auth, _ctrl.post);
router.put('/:id',auth, _ctrl.put);
router.delete('/:id',auth, _ctrl.delete);

module.exports = router;