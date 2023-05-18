const express = require('express');
const router = express.Router();
const { myServerAdapter } = require('./bull/jobsAdd');

router.use('/queue', myServerAdapter.getRouter());

module.exports = router;