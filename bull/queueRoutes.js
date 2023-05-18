const express = require('express')
const routes = express.Router()
const { myServerAdapter } = require('./jobsAdd');

routes.use("/queue", myServerAdapter.getRouter())

module.exports = routes;
