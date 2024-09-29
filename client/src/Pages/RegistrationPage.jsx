import React, { useState } from "react";
import "../Style.css";
import LoginCard from "../Components/FormsComponents/LoginCard";
import SignupCard from "../Components/FormsComponents/SignupCard";
import { ToggleButton } from "../Components/FormsComponents/FormElements";
import { useContext } from "react";
import { DarkThemeContext } from "../Context/DarkThemContext";
const RegistrationPage = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "white";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "";
  return (
    <section
      className="RegistrationSection"
      style={{ backgroundColor, border: borderStyle }}
    >
      <div className="RegitrationCard">
        <SignupCard />
        <LoginCard />
      </div>
      <ToggleButton />
    </section>
  );
};

export default RegistrationPage;
