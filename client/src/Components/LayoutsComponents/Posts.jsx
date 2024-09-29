import React from "react";
import PostCard from "../PostsComponents/PostCard";
import User from "../UserComponents/User";
import SearchInput from "../FormsComponents/SearchInput";

const Posts = () => {
  return (
    <section className="flex w-[90%] mx-auto my-36 justify-between items-start">
      <div className="lg:w-[60%] w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl text-gray font-extrabold ">Posts</h2>
          <div className="text-3xl text-gray font-bold">
            <SearchInput />
          </div>
        </div>
        <div className="divide-y-[1px] divide-solid divide-gray">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="hidden lg:flex w-[30%] flex-col">
        <div className="w-full">
          <div className="mx-auto py-4  text-3xl text-gray font-extrabold ">
            Recent Seen
          </div>
        </div>
        <div className="w-full flex flex-col items-center content-center divide-y-[1px] divide-solid divide-gray  rounded-md border border-gray border-solid">
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </section>
  );
};

export default Posts;
