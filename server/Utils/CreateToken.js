import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../.env" });

export const CreateToken = (userID) => {
  let Token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return Token;
};

export const LoginHearders = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 30 * 24 * 60 * 60 * 1000,
};
export const LogoutHearders = {
  httpOnly: true,
  expires: new Date(0),
};
