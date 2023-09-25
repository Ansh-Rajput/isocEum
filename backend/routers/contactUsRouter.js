const express = require('express');
const contactUs = require('../controlers/contactQuery');
const router = express.Router()

router.post('/query',contactUs);

module.exports = router;