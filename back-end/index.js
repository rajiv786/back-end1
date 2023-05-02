const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const { htmlToText } = require('html-to-text');

const app = express();
app.use(bodyParser.json());

app.post('/api/generate-pdf', async (req, res) => {
	const html=`<h1>aaa</h1>`
	const {  options } = req.body;
	
  const doc = new PDFDocument(options);

  // Set the response headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');

  // Pipe the PDF to the response
  doc.pipe(res);

  // Convert HTML to plain text and write to PDF
  const text = htmlToText(html, { wordwrap: 130 });
  doc.text(text);

  // End the PDF stream
  doc.end();
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
