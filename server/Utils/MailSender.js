import dotenv from "dotenv";
import { google } from "googleapis";
import nodemailer from "nodemailer";
dotenv.config(dotenv.config({ path: "../.env" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
  },
});

const MailSender = (
  name = "abdeljalile lafkir",
  email = "lafkir.abdeldjalile35@g.ens-kouba.dz",
  OTP = "000000"
) => {
  let mailOptions = {
    from: "ahmedjalallafkir@gmail.com",
    to: email || "lafkir.abdeldjalile35@g.ens-kouba.dz",

    subject: "Your One-Time Password (OTP) for myBLOOOG app",
    text: "",
    html: `
            <p>Dear ${name},</p>
            <p>Thank you for your request to access your account.<br/>
             Your One-Time Password (OTP) is:
             </p><br/>
            <p class="">[${OTP}]</p><br/>
            <p>Please enter this code in the provided field within the next 10 minutes. For your security, this OTP is valid for a single use only.</p><br/>
            <p>If you did not request this code, please ignore this email or contact our support team for assistance.</p><br/>
                <p>Best regards,</p><br/>
                <p>myBLOOOG team</p>
                <p><a  href="mailto:brrrrrrrrrrrrrr>Contacts</a></p>
                <p><a href="https://brrrrrrrrr.com"> app link </a></p>
        `,
  };

  try {
    transporter.sendMail(mailOptions, (error, data) => {
      error
        ? console.log("Transporter Error " + error)
        : console.log("Email sent successfully", "data");
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
export default MailSender;
