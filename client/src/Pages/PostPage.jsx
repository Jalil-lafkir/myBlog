import React from "react";
import { api } from "../api/axios";
import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePopup } from "../Context/PopupContext.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import Comment from "../Components/PostsComponents/Comment";
import Loading from "../Components/LayoutsComponents/Loading.jsx";
import {
  CommentInput,
  SubmitComment,
} from "../Components/FormsComponents/CommentFormElements";

const PostPage = () => {
  const [loadPost, setLoadpost] = useState(true);
  const [post, setPost] = useState(null);

  const [loadComments, setLoadComments] = useState(true);
  const [comments, setComments] = useState();

  const [commentBody, setcommentBody] = useState();

  const { id } = useParams();
  const { user } = UserContext();
  const { showPopup } = usePopup();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/post/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPost(response.data.Post);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadpost(false);
      }
    }
    fetchPost();
  }, [id]);

  async function fetchComments() {
    try {
      const response = await api.get(`/comment/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadComments(false);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [id]);

  const handleChange = (e) => {
    setcommentBody(e.target.value);
  };

  const hundleSubmit = async (event) => {
    event.preventDefault();
    const Credintials = JSON.stringify({
      content: commentBody,
      auteur: user._id,
      post: id,
    });
    setcommentBody("");
    try {
      const response = await api.post("/comment/create", Credintials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      showPopup(5, response.data.message);
      fetchComments();
    } catch (error) {
      showPopup(5, error.response.data.message);
    }
  };

  return loadPost ? (
    <Loading text={"Loading Post"} />
  ) : (
    <section className="w-[90%] border border-gray border-solid mx-auto my-[5rem] p-16 rounded-lg flex flex-col items-center justify-center">
      <h3 className="text-gray text-5xl font-extrabold py-10">
        {post?.posttitle}
      </h3>
      <div className="flex items-center flex-col justify-center gap-x-5 py-10 lg:flex-row">
        <div className="text-lg font-semibold hover:underline">
          by {post?.writer?.useremail},
        </div>
        <div className="text-lg font-semibold">
          {formatDistance(
            new Date(post?.createdAt || "2003-10-26"),
            new Date(),
            { addSuffix: true }
          )}
        </div>
      </div>

      <div className=" text-center break-words w-full">{post?.postcontent}</div>
      <div className="py-12 flex flex-col w-full text-xl font-semibold">
        <h3>Comments</h3>
        <form className="flex items-start flex-col" onSubmit={hundleSubmit}>
          <CommentInput handleChange={handleChange} />
          <SubmitComment />
        </form>
      </div>

      <div className="w-full my-[5rem] divide-y-[1px] divide-gray divide-solid">
        {loadComments ? (
          <Loading text={"Loading Comments"} />
        ) : comments?.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <div className="text-center text-xl  m-10">No Comments Available</div>
        )}
      </div>
    </section>
  );
};

export default PostPage;
