import React from "react";
import { api } from "../api/axios.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../Context/PopupContext.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import { DarkThemeContext } from "../Context/DarkThemContext";
import * as Form from "../Components/FormsComponents/FormElements";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [postBody, setpostBody] = useState();
  const { user } = UserContext();
  const navigate = useNavigate();
  const { showPopup } = usePopup();

  const handleChange = (e) => {
    if (e.target.id === "PostTitle") {
      setTitle(e.target.value);
    } else {
      setpostBody(e.target.value);
    }
  };

  const handleSubmitPost = async (event) => {
    event.preventDefault();
    const Credintials = JSON.stringify({
      title: title,
      content: postBody,
      auteur: user._id,
    });
    try {
      const response = await api.post("/post/create", Credintials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      showPopup(5, response.data.message);
      setTimeout(() => {
        window.location.replace("https://mybloog-qlv9.onrender.com");
      }, 6000);
    } catch (error) {
      showPopup(5, error.response.data.message);
    }
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
      type: "text",
      id: "PostContent",
      placeholder: "Write ... ",
      value: postBody,
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
      <form className="w-[90%]" onSubmit={handleSubmitPost}>
        <Form.InputField InputElementProps={InputsPropsArray[0]} />
        <Form.TextAreaField InputElementProps={InputsPropsArray[1]} />
        <Form.InputSubmit InputElementProps={InputsPropsArray[2]} />
      </form>
    </section>
  );
};

export default NewPost;
