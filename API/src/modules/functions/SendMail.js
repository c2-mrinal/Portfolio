const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yopmail",
  auth: {
    user: "mrinalkasyapmailservice@yopmail.com",
    pass: "",
  },
});
const sendMail = (mailDetails, callback) => {
  const mailOptions = {
    from: mailDetails.mailId,
    to: "mrinalkasyapmailservice@yopmail.com",
    subject: "Connect Mail",
    text: mailDetails.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("er", error);
    } else {
      if (callback) {
        callback();
      }
      console.log("Email sent: " + info.response);
    }
  });
};

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

module.exports = { sendMail };
