import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
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

export const InputChekBox = ({ InputElementProps }) => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "#F0F1F8";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "";
  return (
    <div className="flex items-center gap-1.5 my-6">
      <input
        style={{ backgroundColor, border: borderStyle }}
        className="text-gray text-[14px] outline-none focus:outline-none border-[1px] border-solid border-gray rounded-sm"
        type={InputElementProps.type}
        id={InputElementProps.id}
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
      to="/"
      className="h-12 w-full flex items-center justify-center gap-2 bg-[#F0F1F8] rounded-lg text-[16px] text-[#5B5B5B] no-underline"
    >
      <FontAwesomeIcon icon={faGoogle} />
      <p> Log in with Google </p>
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

export const Divider = ({ DividerText }) => {
  const widthValue = DividerText === "Or" ? "40%" : "30%";
  return (
    <div className="hidden md:flex items-center justify-between w-full text-gray my-6">
      <div
        style={{ width: `${widthValue}` }}
        className={`bg-gray h-[.1px] text-gray`}
      ></div>
      <span className="">{DividerText}</span>
      <div
        style={{ width: `${widthValue}` }}
        className={`bg-gray h-[.1px] text-gray`}
      ></div>
    </div>
  );
};

export const ToggleButton = () => {
  const [isFliped, setisFliped] = useState(false);
  const InputsPropsArray = [
    {
      text: "Didn't have Account ?",
      buttonText: "Get one",
      id: "SignUpTogglingButton",
      rotateDeg: "rotate-y-0",
    },

    {
      text: "Already have Account ?",
      buttonText: "Login",
      id: "LogInTogglingButton",
      rotateDeg: "rotate-y-180",
    },
  ];
  const props = isFliped ? InputsPropsArray[1] : InputsPropsArray[0];
  const flipCard = () => {
    setisFliped(!isFliped);

    isFliped
      ? (document.querySelector(".RegitrationCard").style.transform =
          "rotateY(0deg)")
      : (document.querySelector(".RegitrationCard").style.transform =
          "rotateY(180deg)");
  };
  return (
    <div className="text-[#5B5B5B] flex flex-col lg:flex-row text-[14px] absolute bottom-4 left-[50%] translate-x-[-50%] items-center justify-center my-4">
      <div>{props.text}</div>
      <button
        className="bg-transparent text-[#4D80E4] py-0 px-2 text-base transition-all duration-100 active:opacity-80"
        id={props.id}
        onClick={flipCard}
      >
        {props.buttonText}
      </button>
    </div>
  );
};
