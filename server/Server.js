import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import UserRouter from "./Routes/UserRout.js";
import GoogleRouter from "./Routes/GoogleAuthRout.js";
import DB_Connection from "./Configuratons/DB_Connection.js";

dotenv.config();
DB_Connection();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", UserRouter);
app.use("/auth/google", GoogleRouter);

const PORT = process.env.PORT;
mongoose.connection.once("open", async () => {
  console.log("DATABASE Connected!");
  app.listen(PORT, () => {
    console.log(`Server up and run on port ${PORT}`);
  });
});
