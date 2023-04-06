const nodemailer = require("nodemailer");
const mail = process.env.MAIL;

// let testAccount = nodemailer.createTestAccount();

// // const transporter = nodemailer.createTransport({
// // 	// service: "yopmail",
// // 	host: "smtp.thereal.email",
// // 	secure: false,
// // 	port: 587,
// // 	auth: {
// // 		user: "mrinalkasyapmailservice@yopmail.com",
// // 		pass: "kctznomonijklptb",
// // 	},
// // });

// let transporter = nodemailer.createTransport({
// 	host: "smtp.ethereal.email",
// 	port: 587,
// 	secure: false, // true for 465, false for other ports
// 	auth: {
// 		user: testAccount.user, // generated ethereal user
// 		pass: testAccount.pass, // generated ethereal password
// 	},
// });

// const sendMail = (mailDetails, callback) => {
// 	const mailOptions = {
// 		from: "mailDetails.mailId",
// 		to: "mrinalkasyapmailservice@yopmail.com",
// 		subject: "Connect Mail",
// 		text: "mailDetails.message",
// 	};

// 	transporter.sendMail(mailOptions, function (error, info) {
// 		if (error) {
// 			console.log("er", error);
// 		} else {
// 			// if (callback) {
// 			// 	callback();
// 			// }
// 			console.log("Email sent: " + info.response);
// 		}
// 	});
// };

// // transporter.sendMail(mailOptions, function (error, info) {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Email sent: " + info.response);
// //   }
// // });

async function main(data) {
	console.log({ mail });
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: data.mailId, // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: data.message, // plain text body
		html: "<b>Hello world?</b>", // html body
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

const sendMail = (data) => {
	main(data).catch(console.error);
};

module.exports = { sendMail };
