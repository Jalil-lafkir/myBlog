import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/UserModel.js";
dotenv.config({ path: "../.env" });

export const authenticate = async (request, response, next) => {
  const Token = request.cookies.jwt;
  if (Token) {
    try {
      const id = jwt.verify(Token, process.env.JWT_SECRET);
      request.user = await UserModel.findById({ _id: id }).select(
        "-userpassword"
      );
      next();
    } catch (error) {
      console.log("Authenticate error:", error);
      response.status(401).json({ message: "Token Faild!" });
    }
  } else {
    console.log("Authenticate error: Token Not Found!");
    response.status(401).json({ message: "Token Not Found!" });
  }
};

export const authorize = async (request, response, next) => {
  const Token = request.cookies.jwt || undefined;
  if (Token) {
    try {
      const id = jwt.verify(Token, process.env.JWT_SECRET);
      const user = await UserModel.findById({ _id: id }).select(
        "-userpassword"
      );
      user.Admin
        ? next()
        : response.status(401).json({ message: "Unauthorized User!" });
    } catch (error) {
      console.log("authorize error:", error);
      response.status(401).json({ message: "Unauthorize User!" });
    }
  } else {
    console.log("authorize error: Token Not Found!");
    response.status(401).json({ message: "Token Not Found!" });
  }
};
