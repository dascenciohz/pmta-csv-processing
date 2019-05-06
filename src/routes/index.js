'use strict'

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({Message: "Wellcome to PMTA APP - Fix User Container"});
});

module.exports = router;