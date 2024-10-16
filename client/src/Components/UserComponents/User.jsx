import React from "react";
import { Logout } from "../../Context/UserContext";

const User = ({ bloger }) => {
  const placeholder = {
    username: "myBLOOOG user",
    useremail: "",
    Avatar:
      "https://i.pinimg.com/564x/3d/26/02/3d2602e1b11f161f7366c70b06fab7ed.jpg",
    Admin: false,
  };
  if (bloger === null || bloger === undefined) {
    bloger = { ...placeholder };
  }
  return (
    <div className="flex items-center gap-x-6 py-4 w-[90%]">
      <img
        className="h-16 w-16 rounded-full border border-solid border-gray"
        src={bloger.Avatar}
        alt=""
      />
      <div>
        <h3 className="text-base text-gray flex items-center justify-start gap-x-2">
          {bloger.username}
          {bloger.Admin ? (
            <span className="text-xs bg-blue px-2 py-[1px] cursor-pointer rounded-md text-white">
              Admin
            </span>
          ) : (
            ""
          )}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray cursor-pointer hover:underline">
            {bloger.useremail}
          </p>
        </div>
      </div>
    </div>
  );
};
export const Profile = ({ user }) => {
  return (
    <div className="flex items-center gap-x-4">
      <img className="h-12 w-12 rounded-full" src={user.Avatar} />
      <div className="flex flex-col ">
        <h3 className="text-base font-semibold text-white lg:text-gray">
          {user.username}
        </h3>
        <div className="flex items-center justify-between">
          <Logout />
          {user.Admin ? (
            <span className="text-xs bg-blue px-2 py-[1px] cursor-pointer rounded-md text-white border-gray boreder-solid border">
              Admin
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
