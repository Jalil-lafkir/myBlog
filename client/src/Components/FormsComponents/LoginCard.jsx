import React from "react";
import { useState } from "react";
import { api } from "../../api/axios";
import * as Form from "./FormElements";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../Context/PopupContext.jsx";

const LoginCard = () => {
  const [LEmail, setLEmail] = useState("");
  const [Lpassword, setLPassword] = useState("");
  const { showPopup } = usePopup();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.target.id === "LEmail"
      ? setLEmail(e.target.value)
      : setLPassword(e.target.value);
  };

  const handelLogin = async (event) => {
    event.preventDefault();
    const Credintials = JSON.stringify({ email: LEmail, password: Lpassword });
    try {
      const response = await api.post("/user/login", Credintials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      showPopup(5, response.data.message);
      setTimeout(() => {
        window.location.replace("http://localhost:5173");
      }, 6000);
    } catch (error) {
      console.log("Login Error", error);
      showPopup(5, error.response.data.message);
    }
  };

  const InputsPropsArray = [
    {
      type: "text",
      id: "LEmail",
      placeholder: "Example@gmail.com",
      onChange: handleChange,
    },
    {
      type: "password",
      id: "LPassword",
      placeholder: "Password",
      onChange: handleChange,
    },
    {
      type: "submit",
      id: "LSubmit",
      placeholder: "Undefind",
      value: "Log In",
    },
  ];

  const LoginCard = {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    transform: "rotateY(0deg)",
  };

  return (
    <div style={LoginCard}>
      <div className="text-[23px] font-semibold text-[#5B5B5B] text-center my-4">
        Welocome Back Hero!
      </div>
      <Form.Divider DividerText={"Log In Using E-mail"} />
      <form className="my-10" onSubmit={handelLogin}>
        <Form.InputField InputElementProps={InputsPropsArray[0]} />
        <Form.InputField InputElementProps={InputsPropsArray[1]} />
        <Form.InputChekBox />
        <Form.InputSubmit InputElementProps={InputsPropsArray[2]} />
      </form>
      <Form.Divider DividerText={"Or"} />
      <Form.SocialInput />
    </div>
  );
};

export default LoginCard;
