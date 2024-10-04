import express, { request, response } from "express";
import {
  GetPostsController,
  GetPostController,
  CreatePostController,
  UpdatePostController,
  DeletePostController,
} from "../Controllers/PostController.js";
import { authenticate, authorize } from "../Middlewares/Auth.js";

const PostRouter = express.Router();
PostRouter.get("/", GetPostsController);
PostRouter.get("/:id", GetPostController);
PostRouter.post("/create", CreatePostController);
PostRouter.put("/update", authenticate, UpdatePostController);
PostRouter.delete("/delete/:id", authenticate, DeletePostController);

export default PostRouter;
