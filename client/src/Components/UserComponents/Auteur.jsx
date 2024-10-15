import React from "react";

export const Auteur = ({ writer }) => {
  const placeholder = {
    username: "myBLOOOG user",
    useremail: "@user",
    Avatar:
      "https://i.pinimg.com/564x/3d/26/02/3d2602e1b11f161f7366c70b06fab7ed.jpg",
    Admin: false,
  };
  if (writer === null || writer === undefined) {
    writer = { ...placeholder };
  }
  return (
    <div className="flex items-center gap-x-4">
      <img
        alt=""
        src={writer.Avatar}
        className="h-12 w-12 rounded-full  border border-solid border-gray"
      />
      <div>
        <h3 className="text-base test-bold text-gray">{writer.username}</h3>
        <p className="text-xs text-gray cursor-pointer hover:underline">
          {writer.useremail}
        </p>
      </div>
    </div>
  );
};
