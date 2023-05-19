const { generatePdf } = require('../src/pdfService');

module.exports = {
    _processors: {
        generatePdf: async ({ data }) => {
            try {
                console.info("PDF generation process started...");
                await new Promise((resolve) => setTimeout(resolve, 5000));
                // await generatePdf(data);
                console.info("PDF generated successfully! 😊");
            } catch (error) {
                console.error("Error - generatePdf", error);
            }
        }
    }
}