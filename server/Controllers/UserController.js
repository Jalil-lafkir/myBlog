import bcrypt from "bcrypt";
import { request, response, json } from "express";
import express from "express";
import { UserModel } from "../Models/UserModel.js";
import GenerateOTP from "../Utils/GenerateOTP.js";
import MailSender from "../Utils/MailSender.js";
import {
  CreateToken,
  LoginHearders,
  LogoutHearders,
} from "../Utils/CreateToken.js";

export const SignupController = async (request, response) => {
  const { name, email, password } = request.body;
  if (!name || !email || !password) {
    return response.status(400).json({ message: "All Field Are Required!" });
  }

  try {
    const Duplicate = await UserModel.findOne({ useremail: email }).exec();
    if (Duplicate) {
      return response.status(400).json({ message: "Email Already Exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const HashedPass = await bcrypt.hash(password, salt);

    const OTP = GenerateOTP();

    await UserModel.create({
      username: name,
      useremail: email,
      userpassword: HashedPass,
      OTP: OTP,
      OTPExpary: Date.now() + 10 * 60 * 1000,
    });

    MailSender(name, email, OTP);

    response.json({ message: "Waiting For Verify Account!" });
  } catch (error) {
    console.log("Sign up error:", error.message);
    response.status(500).json({ message: "Registration Failed!" });
  }
};

export const VerifyAccount = async (request, response) => {
  const { email, OTP } = request.body;
  console.log(email);
  try {
    const user = await UserModel.findOne({ useremail: email });

    if (!user) {
      return response.status(400).json({ message: "User Not Found!" });
    }
    if (OTP !== user.OTP) {
      return response.status(400).json({ message: "Unvalid OTP code!" });
    }
    await UserModel.findOneAndUpdate(
      { useremail: email },
      {
        $set: {
          Verified: true,
        },
        $unset: {
          OTP: "",
        },
      }
    );
    const Token = CreateToken(user._id);
    response
      .status(201)
      .cookie("jwt", Token, LoginHearders)
      .json({ message: "Your Sign Up Has Been Successful!" });
  } catch (error) {
    console.log("Internal Serevr Error During Validation Operation!");
    response
      .status(500)
      .json({ message: "Internal Serevr Error During Validation Operation!" });
  }
};

export const LoginController = async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({ message: "All Field Are Required!" });
  }
  try {
    const user = await UserModel.findOne({ useremail: email });
    if (!user) {
      return response.status(400).json({ message: "User Not Found!" });
    }
    const validPass = await bcrypt.compare(password, user.userpassword);
    if (validPass) {
      const Token = CreateToken(user._id);
      response
        .status(201)
        .cookie("jwt", Token, LoginHearders)
        .json({ message: "Your Log in Has Been Successful!" });
    } else {
      return response.status(400).json({ message: "Wrong Password!" });
    }
  } catch (error) {
    console.log("Log in error:", error.message);
    return response.status(500).json({ message: "Somthing Went Wrong!" });
  }
};

export const LogoutController = async (request, response) => {
  try {
    return response
      .status(201)
      .cookie("jwt", "", LogoutHearders)
      .json({ message: "Your Log Out Has Been Successful!" });
  } catch (error) {
    console.log("Log out error :", error.message);
    response.status(500).json({ message: "Somthing Went Wrong!" });
  }
};
