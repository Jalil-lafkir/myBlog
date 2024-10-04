import express, { request, response } from "express";
import {
  RecentBlogers,
  SignupController,
  LoginController,
  VerifyAccount,
  LogoutController,
} from "../Controllers/UserController.js";
import { authenticate, authorize } from "../Middlewares/Auth.js";

const UserRouter = express.Router();
UserRouter.get("/RecentBlogers", authenticate, RecentBlogers);
UserRouter.post("/login", LoginController);
UserRouter.post("/signup", SignupController);
UserRouter.post("/VerifyAccount", VerifyAccount);
UserRouter.post("/logout", authenticate, LogoutController);

export default UserRouter;
