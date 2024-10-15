import { PostModel } from "../Models/PostModel.js";
import { UserModel } from "../Models/UserModel.js";
import { CommentModel } from "../Models/CommentModel.js";

export const GetPostCommentsController = async (request, response) => {
  const { postId } = request.params;
  if (postId) {
    try {
      // we will edit this querie to retrive only comments array!
      const Comments = await CommentModel.find({ commentpost: postId })
        .select("Commentcontent Commentauteur createdAt")
        .sort({ createdAt: -1 })
        .lean()
        .exec();
      const PostComments = await Promise.all(
        Comments.map(async (comment) => {
          const auteur = await UserModel.findOne({ _id: comment.Commentauteur })
            .select("username useremail Avatar Admin")
            .exec();
          comment.auteur = auteur;
          return comment;
        })
      );

      PostComments.length > 0
        ? response.status(200).json({
            message: "Comments Retrived Successfully!",
            comments: PostComments,
          })
        : response.status(400).json({
            message: "Comments Not Found!",
          });
    } catch (error) {
      console.log("Retriving Comments Error:", error);
      response.status(500).json({ message: "Retriving Comments Failed!" });
    }
  }
};

export const CreateCommentController = async (request, response) => {
  const { content, auteur, post } = request.body;
  if (!content || !auteur || !post) {
    return response
      .status(400)
      .json({ message: "All Credintial Are Required!" });
  }
  try {
    await CommentModel.create({
      Commentcontent: content,
      Commentauteur: auteur,
      commentpost: post,
    });
    return response
      .status(200)
      .json({ message: "Comment Saved Successfully!" });
  } catch (error) {
    console.log("Creating Comments Error:", error);
    response.status(500).json({ message: "Saving Comments Failed!" });
  }
};

export const DeleteCommentController = async (request, response) => {
  const { id } = request.body;
  try {
    await CommentModel.findByIdAndDelete(id);
    response.status(200).json({ message: "Comment Deleted Successfully!" });
  } catch (error) {
    console.log("Deleting Comments Error:", error);
    response.status(500).json({ message: "Deleting Comments Failed!" });
  }
};
