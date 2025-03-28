const express = require('express');
const { getNumbers } = require('../controller/numberControler');
const router = express.Router();

router.get('/:numberid', getNumbers);

module.exports = router;
