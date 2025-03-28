const express = require('express');
const { getTopUsers } = require('../controller/userControler');

const router = express.Router();

router.get('/', getTopUsers);

module.exports = router;
