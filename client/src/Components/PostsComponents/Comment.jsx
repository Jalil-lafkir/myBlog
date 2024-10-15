import React from "react";
import { formatDistance } from "date-fns";
import { Auteur } from "../UserComponents/Auteur";

const Comment = ({ comment }) => {
  return (
    <div className="px-10 py-5 flex flex-col gap-y-2 ">
      <p className="text-xs">
        {formatDistance(
          new Date(comment?.createdAt || "2003-10-26"),
          new Date(),
          {
            addSuffix: true,
          }
        )}
      </p>
      <Auteur writer={comment.auteur} />

      <p className="font-medium">{comment.Commentcontent}</p>
    </div>
  );
};

export default Comment;
