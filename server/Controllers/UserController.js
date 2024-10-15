import bcrypt from "bcrypt";
import MailSender from "../Utils/MailSender.js";
import GenerateOTP from "../Utils/GenerateOTP.js";
import { UserModel } from "../Models/UserModel.js";
import { PostModel } from "../Models/PostModel.js";
import {
  CreateToken,
  LoginHearders,
  LogoutHearders,
} from "../Utils/CreateToken.js";

export const RecentBlogers = async (request, response) => {
  try {
    const Ids = await PostModel.find()
      .select("postauteur")
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    const AllBlogers = await Promise.all(
      Ids.map(async (id) => {
        const Bloger = await UserModel.findOne({ _id: id.postauteur })
          .select("username useremail Avatar Admin")
          .exec();
        return Bloger || null;
      })
    );

    const uniqueBlogers = new Set();
    const filteredBlogers = AllBlogers.filter((bloger) => {
      if (bloger && !uniqueBlogers.has(bloger.useremail)) {
        uniqueBlogers.add(bloger.useremail);
        return true;
      }
      return false;
    });

    const RecentBlogers = filteredBlogers.slice(0, 5);
    RecentBlogers.length > 0
      ? response.status(200).json({
          message: "RecentBlogers Retrived Succefully!",
          RecentBlogers: RecentBlogers,
        })
      : response.status(500).json({ message: "RecentBlogers Not Found!" });
  } catch (error) {
    console.log("Retriving Recent Blogers Error:", error);
    response.status(500).json({ message: "Retriving Recent Blogers Failed!" });
  }
};

export const UserState = async (request, response) => {
  const user = request.user;
  try {
    if (user) {
      response
        .status(200)
        .json({ message: "User Retrived Succefully!", user: user });
    } else {
      response.status(400).json({ message: " Somthing Went Wrong!" });
    }
  } catch (error) {
    console.log("Cheking State Error:", error.message);
    response.status(500).json({ message: "Check Satate Failed!" });
  }
};

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
  try {
    const user = await UserModel.findOne({ useremail: email }).exec();

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
    ).exec();

    const Token = CreateToken(user._id);
    response
      .status(201)
      .cookie("jwt", Token, LoginHearders)
      .json({ message: "Your Sign Up Has Been Successful!", user: user });
  } catch (error) {
    console.log("Internal Serevr Error During Validation Operation!");
    response.status(500).json({ message: "Somthing Went Wrong!" });
  }
};

export const LoginController = async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({ message: "All Field Are Required!" });
  }
  try {
    const user = await UserModel.findOne({ useremail: email }).exec();
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
