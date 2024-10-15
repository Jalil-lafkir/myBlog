import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CommentShema = new Schema(
  {
    Commentcontent: {
      type: String,
      require: true,
    },
    Commentauteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    commentpost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
  },
  { timestamps: true }
);

export const CommentModel = model("Comment", CommentShema);
