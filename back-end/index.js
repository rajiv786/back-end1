const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

const app = express();
app.use(bodyParser.json());

app.post('/api/generate-pdf', async (req, res) => {
	const html=`<!DOCTYPE html>
<html>
<head>
	<title>Certificate of Completion</title>
	<style>
		body {
			 /* change this to the desired background color */
			font-family: Arial, sans-serif;
			text-align: center;
			color: #333;
		}
		.container {
			margin: 50px auto;
			max-width: 651px;
			padding: 20px;
			background-image: url("https://drive.google.com/uc?export=view&id=1Pm0BAuhDvcvJgg6Usm_RtYm6maHN92FY");
			background-size: 692px;
			background-repeat: no-repeat;
			border-radius: 20px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		}
		h1 {
			font-size: 40px;
			margin-bottom: 30px;
		}
		h2 {
			font-size: 24px;
			margin-bottom: 20px;
		}
		.logo {
			max-width: 200px;
			margin-bottom: 20px;
		}
		.border {
			
			border-radius: 10px;
			padding: 33px;
			margin-bottom: 50px;
			position: relative;
		}
		.signature {
			position: absolute;
			bottom: 20px;
			right: 20px;
			font-size: 16px;
		}
		.date {
			position: absolute;
			bottom: 20px;
			left: 20px;
			font-size: 16px;
		}
		.to{
			margin-bottom: 72px;
    margin-top: -51px;
		}
	</style>
</head>
<body>
	
	<div class="container">
		<div class="border">
			<img src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" alt="HubHawks Logo" class="logo">
			<div class="to">
			<h1>Certificate of Completion</h1>
			<h2>This is to certify that _Raji1 successfully completed the course _writing skills by Kevin Missal_  from Hubhawks MasterClass </h2>
		</div>
<div class="row">
	<div class="column" style="background-color:#aaa;">
		<p class="date">Given on: [DATE]</p>
	</div>
	<div class="column" style="background-color:#bbb;">
		<p class="date">Given on: [DATE]</p>
	</div>
	<div class="column" style="background-color:#ccc;">
		<p class="signature">[SIGNATURE]</p>
	</div>
  </div>	
			
		</div>
	</div>
</body>
</html>
`
	const {  options } = req.body;
	
  pdf.create(html, options).toStream((err, stream) => {
    if (err) return res.sendStatus(500);
    // Set the response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');

    // Pipe the PDF to the response
    stream.pipe(res);
  });
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});
