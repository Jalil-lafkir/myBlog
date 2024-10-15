import express from "express";
import { request, response } from "express";
import {
  GetPostCommentsController,
  CreateCommentController,
  DeleteCommentController,
} from "../Controllers/CommentController.js";
import { authenticate, authorize } from "../Middlewares/Auth.js";

const CommentRouter = express.Router();
CommentRouter.get("/:postId", GetPostCommentsController);
CommentRouter.post("/create", CreateCommentController);
CommentRouter.delete("/delete", DeleteCommentController);

export default CommentRouter;
