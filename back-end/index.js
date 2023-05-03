// Required packages
const express = require('express');
const pdf = require('pdf-creator-node');
const fs = require('fs');

// Define app
const app = express();

// Define HTML template

// Define route for generating PDF file
app.get('/generate-pdf', (req, res) => {
    // Create PDF
    // Required package
var pdf = require("pdf-creator-node");
var fs = require('fs')

// Define HTML template
var html = `<!DOCTYPE html>
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
</html>`;

// Define options
var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

// Define PDF document
var document = {
    html: html,
    data: {
        name: "John Doe",
        age: 28,
        gender: "Male"
    },
    path: "./output.pdf"
};

// Create PDF
pdf.create(document, options)
    .then(file => {
        // Send PDF file back to front-end
        res.sendFile(file.filename);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send(error);
    });
});

// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});
