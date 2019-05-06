'use strict'

const router = require('express').Router();
const controllerLog = require('../controllers/log.controller');

router.get('', controllerLog.list);

router.post('/sync', controllerLog.sync);

module.exports = router;