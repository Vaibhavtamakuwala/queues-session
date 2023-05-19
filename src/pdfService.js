const fs = require('fs');
const htmlPdf = require('html-pdf');
const path = require('path');
const { createJobs } = require('../bull/jobsAdd');

const readFile = () => {
    return fs.readFileSync(path.join(`${baseDir}/template/template.html`), 'utf-8')
};


const generatePdf = (html) => {
    new Promise((resolve, reject) => {
        htmlPdf.create(html, {
             format: "Legal", phantomArgs: ['--ignore-ssl-errors=yes'],
         }).toFile('public/sampleTemplate.pdf', (error, result) => {
             if(error) reject(error);
             console.info('We generated the PDF with the queue!');
             resolve(result);
         });
    });
};

const addPdfToJobs = () => {
    try {
        let htmlTemplate = readFile();
        createJobs("generatePdf", htmlTemplate, { priority: 0, attempts: 4, delay: 1000 })  // 1st param is job name, 2nd is obj to process and 3rd is options.
    } catch(error) {
        console.error(error);
    }
};

module.exports = {
    generatePdf,
    addPdfToJobs
}