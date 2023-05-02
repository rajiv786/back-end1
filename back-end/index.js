const express = require('express');
const fs = require('fs');
const pdf = require('html-pdf');

const app = express();

// Define a route for the PDF generation API endpoint
app.get('/generate-pdf', (req, res) => {
  // Define the HTML content to convert (in this example, it's hard-coded)
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>HTML to PDF Example</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>This is an example of converting HTML to PDF using html-pdf.</p>
      </body>
    </html>
  `;

  // Define the PDF file options
  const options = {
    format: 'Letter'
  };

  // Convert the HTML to PDF and stream the PDF to the response
  pdf.create(htmlContent, options).toStream((err, pdfStream) => {
    if (err) return res.sendStatus(500);
    res.setHeader('Content-Type', 'application/pdf');
    pdfStream.pipe(res);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
