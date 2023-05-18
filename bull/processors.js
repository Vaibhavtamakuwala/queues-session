module.exports = {
    _processors: {
        generatePdf: async ({ data }) => {
            try {
                console.info("PDF generation process started...");
                // add consumer function here.
                console.info("PDF generated successfully! 😊");

            } catch (error) {
                console.error("Error - generatePdf", error);
            }
        }
    }
}