const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const { htmlToText } = require('html-to-text');
const app = express();
app.use(bodyParser.json());

app.post('/api/generate-pdf', async (req, res) => {
  const { options } = req.body;

  const doc = new PDFDocument(options);
  // Set the response headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');
  // Pipe the PDF to the response
  doc.pipe(res);
  // Write text to PDF
  doc.fontSize(40).text('Certificate of Completion', { align: 'center' });
  doc.moveDown();
  doc.fontSize(24).text('This is to certify that _Raji1 successfully completed the course _writing skills by Kevin Missal_  from Hubhawks MasterClass', { align: 'center' });
  doc.moveDown(2);

  doc.moveDown(2);
  doc.fontSize(16).text('Given on: [DATE]', { align: 'left' });
  doc.fontSize(16).text('Given on: [DATE]', { align: 'center' });
  doc.fontSize(16).text('[SIGNATUE]', { align: 'right' });
  // End the PDF stream
  doc.end();
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server listening on port 5000');
});
