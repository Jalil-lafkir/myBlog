import "../Utils/Passport.js";
import express from "express";
import passport from "passport";
import { request, response } from "express";
import GoogleAuthContrller from "../Controllers/GoogleAuthContrller.js";

const GoogleRouter = express.Router();
GoogleRouter.get(
  "/",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

GoogleRouter.get(
  "/callback",
  passport.authenticate("google", {
    access_type: "offline",
    scope: ["email", "profile"],
  }),
  GoogleAuthContrller
);

export default GoogleRouter;
