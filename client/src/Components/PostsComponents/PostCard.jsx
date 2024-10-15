import React from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { Auteur } from "../UserComponents/Auteur";

const PostCard = ({ post }) => {
  const prettyContent = (content) => {
    if (!content) return "";
    else
      return (
        <>
          {content.slice(0, 445)} ...
          <Link
            to={`/posts/${post._id}`}
            className="text-blue transition-all cursor-pointer duration-150 hover:underline"
          >
            {"  "}Read more
          </Link>
        </>
      );
  };
  return (
    <div className="py-12 px-4">
      <p className="text-sm text-gray">
        {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
      </p>
      <h3 className="lg:text-3xl text-2xl font-bold  text-gray my-3">
        {post?.posttitle}
      </h3>
      <p className="text-md text-gray my-4 block">
        {prettyContent(post?.postcontent)}
      </p>
      <Auteur writer={post?.writer} />
    </div>
  );
};

export default PostCard;
