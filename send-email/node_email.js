var nodemailer = require('nodemailer');

var EMAIL_ADDRESS='YOUR_GMAIL_ADDRESS@gmail.com'; var EMAIL_PASSWORD='GMAIL_PASSWORD';

var transporter = nodemailer.createTransport({ //setting email account details
  service: 'gmail',
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASSWORD
  }
});

function prepare_email(email_to,email_subject,email_text){
	var mail_body = {
	  from: EMAIL_ADDRESS,
	  to: email_to,
	  subject: email_subject,
	  text: email_text
	};
	return mail_body;
}

function email_send(email_to,email_subject,email_text){
	transporter.sendMail(prepare_email(email_to,email_subject,email_text, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent: ' + info.response);

	  }
	});
}
