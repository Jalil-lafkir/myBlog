import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [position, setPosition] = useState("-20rem");
  const [leftTime, setLeftTime] = useState(10);
  const [message, setMessage] = useState("");
  let timer;

  const showPopup = (duration = 10, msg = "Default message") => {
    setLeftTime(duration);
    setPosition("6rem");
    setMessage(msg);
    clearInterval(timer);
    timer = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setPosition("-20rem");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const clearPopup = () => {
    clearInterval(timer);
    setPosition("-20rem");
    setLeftTime(10);
  };

  return (
    <PopupContext.Provider
      value={{ position, leftTime, message, showPopup, clearPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};
