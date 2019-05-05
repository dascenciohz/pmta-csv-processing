'use strict'

const router = require('express').Router();
const controllerDir = require('../controllers/file.controller');

router.get('', controllerDir.list);

router.post('/add', controllerDir.add);

module.exports = router;