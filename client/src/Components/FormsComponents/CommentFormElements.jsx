import React from "react";
import { useContext } from "react";
import { DarkThemeContext } from "../../Context/DarkThemContext";

export const CommentInput = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";
  return (
    <div className="h-12 w-full my-3">
      <input
        style={{ backgroundColor, border: borderStyle }}
        className="h-full w-full border-none outline-none text-[16px] bg-[#F0F1F8] rounded-lg px-4 resize-none focus:outline-none active:outline-none"
        type="text"
        id=""
        placeholder="Add Comment"
      />
    </div>
  );
};
export const SubmitComment = () => {
  return (
    <div className=" flex items-center justify-center">
      <input
        className="text-white text-[18px] outline-none border-none w-full lg:w-60 py-2 px-4 rounded-lg bg-[#4D80E4] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#4D80E4] hover:opacity-90"
        type="submit"
        id=""
        value="Publish"
      />
    </div>
  );
};
