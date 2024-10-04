import express, { request, response } from "express";
import {
  GetPostCommentsController,
  CreateCommentController,
  DeleteCommentController,
} from "../Controllers/CommentController.js";
import { authenticate, authorize } from "../Middlewares/Auth.js";

const CommentRouter = express.Router();
CommentRouter.get("/:id", GetPostCommentsController);
CommentRouter.post("/", CreateCommentController);
CommentRouter.delete("/:id", DeleteCommentController);

export default CommentRouter;
