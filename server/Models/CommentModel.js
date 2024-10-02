import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CommentShema = new Schema(
  {
    Commentcontent: {
      type: String,
      require: true,
    },
    Commentauteur: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    commentpost: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

export const CommentModel = model(Comment, CommentShema);
