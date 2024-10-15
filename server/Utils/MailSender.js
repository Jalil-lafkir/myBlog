import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config(dotenv.config({ path: "../.env" }));

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
            <!DOCTYPE html>
              <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #FFF;
                            line-height: 1.6;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                            border: 1px solid #ddd;
                            border-radius: 8px;
                        }
                        h1 {
                            color: #4CAF50;
                        }
                        p {
                            margin-bottom: 15px;
                        }
                        .otp {
                            font-size: 1.2em;
                            font-weight: bold;
                            color: #4D80E4;
                        }
                        .footer {
                            margin-top: 30px;
                            font-size: 0.9em;
                            color: #777;
                        }
                        a {
                            color: #4CAF50;
                            text-decoration: none;
                        }
                        a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <p>Dear ${name},</p>
                        <p>Thank you for your request to access your account.<br/>
                        Your One-Time Password (OTP) is:</p>
                        
                        <p class="otp">${OTP}</p>
                        
                        <p>Please enter this code in the provided field within the next 10 minutes. For your security, this OTP is valid for a single use only.</p>
                        <p>If you did not request this code, please ignore this email or contact our support team for assistance.</p>

                        <p>Best regards,</p>
                        <p>myBLOOOG team</p>
                        
                        <div class="footer">
                            <p><a href="mailto:brrrrrrrrrrrrrr">Contact Us</a></p>
                            <p><a href="https://brrrrrrrrr.com">App Link</a></p>
                        </div>
                    </div>
                </body>
              </html>
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
