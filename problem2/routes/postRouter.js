const express = require('express');
const { toporlatest } = require('../controller/postController');

const router = express.Router();

router.get('/', toporlatest);

module.exports = router;
