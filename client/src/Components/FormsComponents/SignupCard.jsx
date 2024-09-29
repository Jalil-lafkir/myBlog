import React from "react";
import * as Form from "./FormElements";
import "../../Style.css";

const SignupCard = () => {
  const InputsPropsArray = [
    {
      type: "text",
      id: "SName",
      placeholder: "Full Name",
      value: "",
    },
    {
      type: "text",
      id: "SEmail",
      placeholder: "Example@gmail.com",
      value: "",
    },
    {
      type: "password",
      id: "SPassword",
      placeholder: "Password",
      value: "",
    },
    {
      type: "Checkbox",
      id: "SCheckbox",
      placeholder: "Undefind",
      value: "",
    },
    {
      type: "submit",
      id: "Submit",
      placeholder: "Undefind",
      value: "Sign Up",
    },
  ];
  return (
    <div className="SignupCard">
      <div className="text-[23px] font-semibold text-[#5B5B5B] text-center my-4">
        Hello Friend!
      </div>
      <Form.Divider DividerText={"Sign up Using E-mail"} />
      <form className="my-10">
        <Form.InputField InputElementProps={InputsPropsArray[0]} />
        <Form.InputField InputElementProps={InputsPropsArray[1]} />
        <Form.InputField InputElementProps={InputsPropsArray[2]} />
        <Form.InputChekBox InputElementProps={InputsPropsArray[3]} />
        <Form.InputSubmit InputElementProps={InputsPropsArray[4]} />
      </form>
      <Form.Divider DividerText={"Or"} />
      <Form.SocialInput />
    </div>
  );
};

export default SignupCard;
