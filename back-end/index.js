const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/api/pdf', async (req, res) => {
	console.log(req.body);
	const html = `<h1>Rajiv ${req.body.html}`
	console.log('html',html)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();
  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="file.pdf"',
    'Content-Length': pdf.length,
  });
	console.log(pdf);
  res.send(pdf);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
