import React, { useState } from "react";
import * as Form from "../Components/FormsComponents/FormElements";
import { useContext } from "react";
import { DarkThemeContext } from "../Context/DarkThemContext";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const NewPost = () => {
  const { quill, quillRef } = useQuill();
  const [title, setTitle] = useState("Title");
  const [postBody, setpostBody] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setpostBody(e);
  };

  const InputsPropsArray = [
    {
      type: "text",
      id: "PostTitle",
      placeholder: "Title",
      value: title,
      onChange: handleChange,
    },
    {
      type: "submit",
      id: "PostSubmit",
      placeholder: "Undefind",
      value: "Publish",
    },
  ];
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";

  return (
    <section className="w-[90%] lg:w-[50rem] border border-gray border-solid mx-auto my-[5rem] p-16 rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-2xl">Craete New Post </h1>
      <Form.InputField InputElementProps={InputsPropsArray[0]} />
      <div
        style={{ backgroundColor, border: borderStyle }}
        value={postBody}
        className="w-full my-3 rounded-md bg-[#F0F1F8]  min-h-8 "
        onChange={handleBodyChange}
        placeholder="Write"
      >
        <div ref={quillRef} />
      </div>
      <Form.InputSubmit InputElementProps={InputsPropsArray[1]} />
    </section>
  );
};

export default NewPost;
