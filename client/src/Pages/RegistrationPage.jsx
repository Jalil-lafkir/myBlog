import "../Style.css";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { DarkThemeContext } from "../Context/DarkThemContext";
import LoginCard from "../Components/FormsComponents/LoginCard";
import SignupCard from "../Components/FormsComponents/SignupCard";
import { ToggleButton } from "../Components/FormsComponents/FormElements";

const RegistrationPage = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "white";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "";

  const [flipped, setFliped] = useState(false);
  const toggleCard = () => {
    setFliped(!flipped);
  };

  const RegistrationSection = {
    height: "47rem",
    margin: "8rem auto",
    background: backgroundColor,
    borderRadius: "6px",
    padding: "2rem 5rem",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    perspective: "1000px",
    backgroundColor,
    border: borderStyle,
  };

  const RegitrationCard = {
    width: "100%",
    height: "100%",
    position: "relative",
    transition: "all 2s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  return (
    <section style={RegistrationSection} className="w-[90%] lg:w-[40rem]">
      <div style={RegitrationCard}>
        <LoginCard />
        <SignupCard />
      </div>
      <ToggleButton toggleCard={toggleCard} status={flipped} />
    </section>
  );
};

export default RegistrationPage;
