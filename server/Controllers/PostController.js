import { request, response } from "express";
import { PostModel } from "../Models/PostModel.js";

export const GetPostsController = async (request, response) => {
  const { BlogerID, title } = request.params;
  try {
    const Posts = await PostModel.find().exec();
    response
      .status(200)
      .json({ message: "Posts Retrived Successfully!", data: Posts });
  } catch (error) {
    console.log("Retriving Posts Error:", error);
    response.status(500).json({ message: "Retriving Posts Failed!" });
  }
};

export const GetPostController = async (request, response) => {
  const { id } = request.params;
  try {
    const Post = await PostModel.find({ _id: id });
    Post.length
      ? response
          .status(200)
          .json({ message: "Post Retrived Successfully!", data: Post })
      : response.status(400).json({ message: "Post Not Found!" });
  } catch (error) {
    console.log("Retriving Post Error:", error);
    response.status(500).json({ message: "Retriving Post Failed!" });
  }
};

export const CreatePostController = async (request, response) => {
  const { title, content, auteur } = request.body;
  if (!title || !content || !auteur) {
    response.status(400).json({ message: "All Field Are Required!" });
  }
  try {
    await PostModel.create({
      posttitle: title,
      postcontent: content,
      postauteur: auteur,
    });
    response.status(200).json({ message: "Post Saveed Succefully!" });
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
