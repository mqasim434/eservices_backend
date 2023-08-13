const nodemailer = require("nodemailer");
const express = require('express');

const sendMail = async (req,res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }

    console.log("Credentials obtained, sending message...");

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: "mittie.konopelski@ethereal.email",
        pass: "2ZCdS6nrf25Bdd1nvM",
      },
    });

    // Message object
    let message = {
      from: "Sender Name <mittie.konopelski@ethereal.email>",
      to: "Recipient <mq30003@gmail.com>",
      subject: "Nodemailer is unicode friendly ✔",
      text: "Hello to myself!",
      html: "<p><b>Hello</b> to myself!</p>",
    };

    let info = transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }

      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    res.json(info);
  });
  
};

module.exports = sendMail;
