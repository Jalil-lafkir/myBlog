import React from "react";
import Loading from "./Loading";
import { api } from "../../api/axios";
import User from "../UserComponents/User";
import { useEffect, useState } from "react";
import PostCard from "../PostsComponents/PostCard";
import SearchInput from "../FormsComponents/SearchInput";

const Posts = () => {
  const [Posts, setPosts] = useState();
  const [loadPosts, setLoadPosts] = useState(true);

  const [recentBlogers, setRecentBloger] = useState();
  const [loadBlogers, setLoadBlogers] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/post");
        setPosts(response.data.Posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadPosts(false);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchBlogers() {
      try {
        const response = await api.get("/user/RecentBlogers");
        setRecentBloger(response.data.RecentBlogers);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoadBlogers(false);
        }, 2000);
      }
    }
    fetchBlogers();
  }, []);

  return (
    <section
      className="flex w-[90%] mx-auto my-36 justify-between items-start"
      id="Blogs"
    >
      <div className="lg:w-[60%] w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl text-gray font-extrabold ">Posts</h2>
          <div className="text-3xl text-gray font-bold ">
            <SearchInput />
          </div>
        </div>
        <div className="divide-y-[1px] divide-solid divide-gray">
          {loadPosts ? (
            <Loading text={"Loading Posts"} />
          ) : Posts?.length > 0 ? (
            Posts.map((post, index) => <PostCard key={index} post={post} />)
          ) : (
            <div className="text-center text-xl  m-10">No Posts Available</div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex w-[30%] flex-col">
        <div className="w-full">
          <div className="mx-auto py-4  text-3xl text-gray font-extrabold ">
            Recent Seen
          </div>
        </div>
        <div className="w-full flex flex-col items-center content-center divide-y-[1px] divide-solid divide-gray  rounded-md border border-gray border-solid">
          {loadBlogers ? (
            <Loading text={"Loading Blogers"} />
          ) : recentBlogers?.length > 0 ? (
            recentBlogers.map((bloger, index) => (
              <User key={index} bloger={bloger} />
            ))
          ) : (
            <div className="text-center text-xl  m-10">
              No Blogers Available
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;
