import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OTPSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  OTP: {
    type: Number,
    require: true,
  },
});

export const OTPModel = model("Otps", OTPSchema);
