import React, { useState } from "react";
import * as Form from "./FormElements";
import "../../Style.css";

const LoginCard = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    e.target.attributes.id.nodeValue === "LEmail"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
    console.log(`email: ${Email}`);
    console.log(`password: ${password}`);
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
      type: "Checkbox",
      id: "LCheckbox",
      placeholder: "Undefind",
      value: "",
    },
    {
      type: "submit",
      id: "LSubmit",
      placeholder: "Undefind",
      value: "Log In",
    },
  ];

  return (
    <div className="LoginCard">
      <div className="text-[23px] font-semibold text-[#5B5B5B] text-center my-4">
        Welocome Back Hero!
      </div>
      <Form.Divider DividerText={"Log In Using E-mail"} />
      <form className="my-10">
        <Form.InputField InputElementProps={InputsPropsArray[0]} />
        <Form.InputField InputElementProps={InputsPropsArray[1]} />
        <Form.InputChekBox InputElementProps={InputsPropsArray[2]} />
        <Form.InputSubmit InputElementProps={InputsPropsArray[3]} />
      </form>
      <Form.Divider DividerText={"Or"} />
      <Form.SocialInput />
    </div>
  );
};

export default LoginCard;
