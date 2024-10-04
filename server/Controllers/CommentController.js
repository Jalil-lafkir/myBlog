import { PostModel } from "../Models/PostModel.js";
import { CommentModel } from "../Models/CommentModel.js";

export const GetPostCommentsController = async (request, response) => {
  const { id } = Request.params;
  try {
    if (id) {
      // we will edit this querie to retrive only comments array!
      const PostComments = await PostModel.find({ _id: id }, "postcomments");
      PostComments
        ? response.status(200).json({
            message: "Comments Retrived Successfully!",
            data: PostComments,
          })
        : response.status(400).json({
            message: "Comments Not Found!",
          });
    }
  } catch (error) {
    console.log("Retriving Comments Error:", error);
    response.status(500).json({ message: "Retriving Comments Failed!" });
  }
};

export const CreateCommentController = async (request, response) => {
  const { content, auteur, postID } = Request.body;
  if (!content || !auteur || !post) {
    request.status(400).json({ message: "All Credintial Are Required!" });
  }
  try {
    await CommentModel.create({
      Commentcontent: content,
      Commentauteur: auteur,
      commentpost: postID,
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
  const { id } = Request.params;
  try {
    await CommentModel.findByIdAndDelete({ _id: id });
    response.status(200).json({ message: "Comment Deleted Successfully!" });
  } catch (error) {
    console.log("Deleting Comments Error:", error);
    response.status(500).json({ message: "Deleting Comments Failed!" });
  }
};
