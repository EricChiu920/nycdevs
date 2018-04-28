const express = require('express');
const router = express.Router();

//Controller Imports
const apiHome = require('../Controller/apiHome');

//Routes
router.get('/', apiHome.getApi);

router.use(apiHome.invalidPath);

module.exports = router;
