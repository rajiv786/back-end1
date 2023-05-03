const express = require('express');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');

app.post('/html-to-pdf', async (req, res) => {
  try {
    // Get HTML content from request body
    const html = `<!DOCTYPE html>
	  <html>
	  <head>
		  <title>Certificate of Completion</title>
		  <style>
			  body {
				   /* change this to the desired background color */
				  font-family: 'Times New Roman', sans-serif;
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
			  p{
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
				  <p>This is to certify that  successfully completed the course <b>Writing skills by Kevin Missal</b>  from Hubhawks MasterClass </h2>
			  </div>
	  <div class="row">
		  <div class="column" style="background-color:#aaa;">
			  <p class="date">Given on: 02-03-2023</p>
		  </div>
		  <div class="column" style="background-color:#bbb;">
			  <p class="date">Given on: 02-03-2023</p>
		  </div>
		  <div class="column" style="background-color:#ccc;">
			  <p class="signature"> Kevin Missal </p>
		  </div>
		</div>	
				  
			  </div>
		  </div>
	  </body>
	  </html>
	  `;
    
    // Define PDF options
    const options = {
      pageSize: 'letter',
      encoding: 'utf8',
      orientation: 'portrait'
    };
    
    // Use wkhtmltopdf to generate PDF from HTML
    wkhtmltopdf(html, options, (err, pdf) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error generating PDF');
      } else {
        // Send PDF as response to the API call
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="file.pdf"');
        res.send(pdf);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
});
app.listen(5000, () => console.log('Server started on port 5000.'));
