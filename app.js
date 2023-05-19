const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { SERVER, START_EXE } = require('./config');
const { addPdfToJobs } = require('./src/pdfService');
require('./bull/consumer'); // This is processor/ consumer file.

global.baseDir = __dirname;

// Routes
app.use(require("./mainRoutes"));

// Function to execute.
if(START_EXE == "true") {
    addPdfToJobs();
};
// To execute the queue function, set START_EXE=true in your env.

server.listen(SERVER.PORT, () => {
    console.info(`Server running on port ${SERVER.PORT} ✅`)
});