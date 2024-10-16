import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../.env" });

export const CreateToken = (userID) => {
  let Token = jwt.sign({ id: userID }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  return Token;
};

export const LoginHearders = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  secure: true,
  maxAge: 3 * 24 * 60 * 60 * 1000,
};
export const LogoutHearders = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  secure: true,
  expires: new Date(0),
};
