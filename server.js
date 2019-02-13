const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const app = express();

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'code.testmailer@gmail.com',
		pass: '20testmail19'
	}
});

let port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
	res.sendFile(index, {root: './public'});

});

app.post('/', (req,res)=>{
	let number = req.body.number;
	let carrier = req.body.carrier;
	let link = req.body.link;
	var mailOptions = {
		from: 'code.testmailer@gmail.com',
		to: number + carrier,
		text: link
	};

	if(carrier === '@vtext.com'){
		console.log('number was: ' + mailOptions.to);

		transporter.sendMail(mailOptions, (error,info)=>{
			if(error){
				console.log(error);
			} else {
				console.log('Email Sent: ' + info.response);
			}
		});

	} else if(carrier === '@att.txt.net'){
		console.log('number was: ' + mailOptions.to);

		transporter.sendMail(mailOptions, (error,info)=>{
			if(error){
				console.log(error);
			} else {
				console.log('Email Sent: ' + info.response);
			}
		});

	} else {
		console.log('something went wrong boss');
	}
});

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});


/*	transporter.sendMail(mailOptions, (error,info)=>{
		if(error){
			console.log(error);
		} else {
			console.log('Email Sent: ' + info.response);
		}
	});*/