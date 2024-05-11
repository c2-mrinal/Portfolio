const nodemailer = require("nodemailer");
require("dotenv").config();

const mailID = process.env.MAIL_ID;
const mailHost = process.env.MAIL_HOST;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const accessToken = process.env.ACCESS_TOKEN;

function main(res, data) {
	const transporter = nodemailer.createTransport({
		host: mailHost,
		port: 465,
		secure: true,
		auth: {
			type: "OAuth2",
			user: mailID,
			clientId: clientId,
			clientSecret: clientSecret,
			refreshToken: refreshToken,
			accessToken: accessToken,
		},
	});

	const mailForRecipient = () => {
		let msg = "";
		data?.message?.split("\n")?.forEach((val) => {
			msg += `<p> ${val}</p>`;
		});
		return `<div> <h3>Dear Mrinal Kasyap,</h2>

		<p>I hope this email finds you well. My name is ${data.name}, and I am writing to you from your portfolio website. I would like to inquire about your services and have a few questions.
		</p>
		<strong>Here are my details:</strong>
		<br/>
<div style="background: #C5C6D0 ; width: 90%; margin:10px auto ; padding: 5px">
		<p>Name: <strong>${data.name}</strong></p>
		<p>Email: <strong>${data.mailId}</strong></p>
		<p>Message:
		${msg}</p>
		</div>
		<h5>I would appreciate it if you could provide me with more information about your services and any relevant details. Thank you for your time, and I look forward to hearing from you soon.
		</h5>
		Best regards,<br/>
		<strong>${data.name}</strong></div>`;
	};
	const mailFromRecipient = () => {
		return ` <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px; padding: 20px;">
        <h1 style="color: #007bff;">Thank You for Contacting Us</h1>
        <p>Dear ${data.name},</p>
        <p>I greatly appreciate your interest and the time you've taken to inquire about my services through portfolio website.</p>
        <p>I have received your message with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.mailId}</li>
        </ul>
        <p>Your message:</p>
        <blockquote><em>${data.message}</em></blockquote>
        <p>I will carefully review your inquiry and respond to your questions as soon as possible. Your interest in my services means a lot to us, and I am committed to providing you with the information you need.</p>
        <p>If you have any additional questions or if there's anything else you'd like to discuss, please feel free to let me know. I'm here to assist you.</p>
        <p>Once again, thank you for considering my services. I look forward to assisting you further and providing you with the information you require.</p>
        <p>Best regards,<br>
        <strong>Mrinal Kasyap</strong><br>
        <strong>Web Developer</strong><br>
        Mob: <a href="tel:+917004141861"><strong>+91 7004141861</strong></a></p>
		<img src="https://drive.google.com/uc?export=view&id=1PsKMU9NPqKdxfYl06ZO1WXXZUC_iYhQv" height="80", width="100" alt="c2-mrinal"/>
    </div>`;
	};
	const mailOptions = {
		from: data.mailId,
		to: "mrinalspec@gmail.com",
		subject: "Inquiry from " + data.name,
		text: data.message,
		html: mailForRecipient(),
	};
	const mailResponseOptions = {
		from: "mrinalspec@gmail.com",
		to: data.mailId,
		subject: "Thank You for Contacting ",
		text: data.message,
		html: mailFromRecipient(),
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (!error) {
			transporter.sendMail(mailResponseOptions, (error, info) => {
				if (!error) {
					res.send({ success: true, msg: info.response });
				} else {
					res.status(400).end({ status: false, error: error });
				}
			});
		} else {
			res.status(400).end({ status: false, error: error });
		}
	});
}

const sendMail = (res, data) => {
	main(res, data);
};

module.exports = { sendMail };
