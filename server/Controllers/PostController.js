import { request, response } from "express";
import { PostModel } from "../Models/PostModel.js";
import { UserModel } from "../Models/UserModel.js";

export const GetPostsController = async (request, response) => {
  try {
    const DB_Posts = await PostModel.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .lean()
      .exec();
    const Posts = await Promise.all(
      DB_Posts.map(async (post) => {
        const user = await UserModel.findOne({ _id: post.postauteur })
          .select("username useremail Avatar")
          .exec();

        post.writer = user;
        return post;
      })
    );

    response.status(200).json({
      message: "Posts Retrieved Successfully!",
      Posts: Posts,
    });
  } catch (error) {
    console.log("Retrieving Posts Error:", error);
    response.status(500).json({ message: "Retrieving Posts Failed!" });
  }
};

export const GetPostController = async (request, response) => {
  const { postId } = request.params;
  try {
    const Post = await PostModel.findOne({ _id: postId }).lean().exec();
    if (!Post) {
      return response.status(400).json({ message: "Post Not Found!" });
    }

    const user = await UserModel.findOne({ _id: Post.postauteur })
      .select("username useremail Avatar")
      .exec();

    Post.writer = user;
    response
      .status(200)
      .json({ message: "Post Retrived Successfully!", Post: Post });
  } catch (error) {
    console.log("Retriving Post Error:", error);
    response.status(500).json({ message: "Retriving Post Failed!" });
  }
};

export const CreatePostController = async (request, response) => {
  const { title, content, auteur } = request.body;
  if (!title || !content || !auteur) {
    return response.status(400).json({ message: "All Field Are Required!" });
  }
  try {
    await PostModel.create({
      posttitle: title,
      postcontent: content,
      postauteur: auteur,
    });
    return response.status(200).json({ message: "Post Saveed Succefully!" });
  } catch (error) {
    console.log("Creating Post Error:", error);
    response.status(500).json({ message: "Saving Post Failed!" });
  }
};

export const UpdatePostController = async (request, response) => {
  const { id, title, content } = request.body;
  try {
    title
      ? await PostModel.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              posttitle: title,
            },
          }
        )
      : "";
    content
      ? await PostModel.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              postcontent: content,
            },
          }
        )
      : "";

    response.status(200).json({ message: "Post Updated Successfully!" });
  } catch (error) {
    console.log("Updating Post Error:", error);
    response.status(500).json({ message: "Updating Post Failed!" });
  }
};

export const DeletePostController = async (request, response) => {
  const { id } = request.params;
  try {
    await PostModel.findByIdAndDelete({ _id: id });
    response.status(200).json({ message: "Post Deleted Successfully!" });
  } catch (error) {
    console.log("Deleting Post Error:", error);
    response.status(500).json({ message: "Deleting Post Failed!" });
  }
};
