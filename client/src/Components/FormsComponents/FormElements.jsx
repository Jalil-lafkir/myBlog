import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkThemeContext } from "../../Context/DarkThemContext";

export const InputField = ({ InputElementProps }) => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";

  return (
    <input
      style={{ backgroundColor, border: borderStyle }}
      className="h-12  w-full my-3 border-none outline-none text-[16px] bg-[#F0F1F8] rounded-lg px-4 resize-none focus:outline-none active:outline-none"
      type={InputElementProps.type}
      id={InputElementProps.id}
      placeholder={InputElementProps.placeholder}
      onChange={InputElementProps.onChange}
    />
  );
};

export const TextAreaField = ({ InputElementProps }) => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";

  return (
    <textarea
      style={{ backgroundColor, border: borderStyle }}
      className="min-h-[110px] my-3  w-full text-[#5B5B5B] border-none outline-none text-[16px] bg-[#F0F1F8] rounded-[6px] p-[10px_15px] align-top resize-y"
      type={InputElementProps.type}
      id={InputElementProps.id}
      placeholder={InputElementProps.placeholder}
      onChange={InputElementProps.onChange}
    />
  );
};

export const InputChekBox = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "";

  return (
    <div className="flex items-center gap-1.5 my-6">
      <input
        style={{ backgroundColor, border: borderStyle }}
        className="text-gray text-[14px] outline-none focus:outline-none border-[1px] border-solid border-gray rounded-sm"
        type="checkbox"
      />
      <p className="text-gray text-[14px] outline-none"> Show Password </p>
    </div>
  );
};

export const InputSubmit = ({ InputElementProps }) => {
  return (
    <input
      className="text-white text-[18px] outline-none border-none w-full py-2 px-4 rounded-lg bg-[#4D80E4] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#4D80E4] hover:opacity-90"
      type={InputElementProps.type}
      id={InputElementProps.id}
      value={InputElementProps.value}
    />
  );
};

export const SocialInput = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";

  return (
    <Link
      style={{ backgroundColor, border: borderStyle }}
      to="https://myblooog.onrender.com/auth/google/callback"
      className="h-12 w-full flex items-center justify-center gap-2 bg-[#F0F1F8] rounded-lg text-[16px] text-[#5B5B5B] no-underline"
    >
      <FontAwesomeIcon icon={faGoogle} />
      <p> Complate with Google </p>
    </Link>
  );
};

export const ToggleInput = ({ InputElementProps }) => {
  return (
    <div className="text-[#5B5B5B] flex text-[14px] items-center justify-center my-4">
      {InputElementProps.text}
      <button
        className="bg-white text-[#4D80E4] py-0 px-2 text-base transition-all duration-100 active:opacity-80"
        id={InputElementProps.id}
        onClick={InputElementProps.fun}
      >
        {InputElementProps.buttonText}
      </button>
    </div>
  );
};

export const VerifyingField = ({ InputElementProps }) => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "1px solid #5b5b5b";
  return (
    <input
      style={{ backgroundColor, border: borderStyle }}
      maxLength="1"
      className="h-12  w-12 my-3 border-none outline-none text-[18px] bg-[#F0F1F8] rounded-lg px-4 resize-none focus:outline-none active:outline-none text-center"
      type="text"
      id={InputElementProps.id}
      onChange={InputElementProps.onChange}
    />
  );
};

export const Divider = ({ DividerText }) => {
  const widthValue = DividerText === "Or" ? "45%" : "30%";
  return (
    <div className="hidden md:flex items-center justify-between w-full text-gray my-6">
      <div
        style={{ width: `${widthValue}` }}
        className={`bg-gray h-[.1px] text-gray border-b-[.1px] border-solid border-gray`}
      ></div>
      <span className="">{DividerText}</span>
      <div
        style={{ width: `${widthValue}` }}
        className={`bg-gray h-[.1px] text-gray border-b-[.1px] border-solid border-gray`}
      ></div>
    </div>
  );
};

export const ToggleButton = ({ toggleCard, status }) => {
  const InputsPropsArray = [
    {
      text: "Didn't have Account ?",
      buttonText: "Get one",
    },

    {
      text: "Already have Account ?",
      buttonText: "Login",
    },
  ];
  const props = status ? InputsPropsArray[1] : InputsPropsArray[0];

  return (
    <div className="text-[#5B5B5B] flex flex-col lg:flex-row text-[14px] absolute bottom-4 left-[50%] translate-x-[-50%] items-center justify-center my-4">
      <div>{props.text}</div>
      <button
        className="bg-transparent text-[#4D80E4] py-0 px-2 text-base transition-all duration-100 active:opacity-80"
        id={props.id}
        onClick={toggleCard}
      >
        {props.buttonText}
      </button>
    </div>
  );
};
