import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostShema = new Schema(
  {
    posttitle: {
      type: String,
      require: true,
    },
    postcontent: {
      type: String,
      require: true,
    },
    postauteur: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postcomments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export const PostModel = model(Post, PostShema);
