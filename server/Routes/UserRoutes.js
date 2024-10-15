import express from "express";
import { request, response } from "express";
import { authenticate, authorize } from "../Middlewares/Auth.js";
import {
  RecentBlogers,
  UserState,
  SignupController,
  LoginController,
  VerifyAccount,
  LogoutController,
} from "../Controllers/UserController.js";

const UserRouter = express.Router();
UserRouter.get("/RecentBlogers", RecentBlogers);
UserRouter.get("/userState", authenticate, UserState);
UserRouter.post("/login", LoginController);
UserRouter.post("/signup", SignupController);
UserRouter.post("/VerifyAccount", VerifyAccount);
UserRouter.post("/logout", authenticate, LogoutController);

export default UserRouter;
