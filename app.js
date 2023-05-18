const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { SERVER } = require('./config');


app.use(require("./mainRoutes"));


server.listen(SERVER.PORT, () => {
    console.info(`Server running on port ${SERVER.PORT} ✅`)
});