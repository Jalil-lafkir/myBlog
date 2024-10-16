import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import UserRouter from "./Routes/UserRoutes.js";
import PostRouter from "./Routes/PostRoutes.js";
import CommentRouter from "./Routes/CommentRout.js";
import GoogleRouter from "./Routes/GoogleAuthRout.js";
import CorsOptins from "./Configuratons/Allowed_Cors.js";
import DB_Connection from "./Configuratons/DB_Connection.js";

dotenv.config();
DB_Connection();

const app = express();

app.use(cors(CorsOptins));
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
app.use("/post", PostRouter);
app.use("/comment", CommentRouter);
app.use("/auth/google", GoogleRouter);

const PORT = process.env.PORT;
mongoose.connection.once("open", async () => {
  console.log("DATABASE Connected!");
  app.listen(PORT, () => {
    console.log(`Server up and run on port ${PORT}`);
  });
});

// ABDELJALIL COOK SOMTHING!!!!!!!
