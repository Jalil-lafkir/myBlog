import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
dotenv.config(dotenv.config({ path: "../.env" }));

const transport = nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_API_KEY,
  })
);

const sender = {
  address: "ahmedjalallafkir@gmail.com",
  name: "Mailtrap Test",
};
const recipients = ["lafkir.abdeldjalile35@g.ens-kouba.dz"];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
