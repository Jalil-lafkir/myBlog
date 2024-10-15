import express from "express";
import { request, response } from "express";
import { authenticate, authorize } from "../Middlewares/Auth.js";
import {
  GetPostsController,
  GetPostController,
  CreatePostController,
  UpdatePostController,
  DeletePostController,
} from "../Controllers/PostController.js";

const PostRouter = express.Router();
PostRouter.get("/", GetPostsController);
PostRouter.get("/:postId", authenticate, GetPostController);
PostRouter.post("/create", authenticate, CreatePostController);
PostRouter.put("/update", authenticate, UpdatePostController);
PostRouter.delete("/delete/:id", authenticate, DeletePostController);

export default PostRouter;
