import React from "react";
import { usePopup } from "../../Context/PopupContext.jsx";

const Popup = () => {
  const { position, leftTime, message } = usePopup();

  return (
    <div
      className="fixed z-30 w-[90%] lg:w-[60rem] py-10  px-5  left-[50%] transform translate-x-[-50%] transition-all duration-1000 rounded-lg flex flex-col gap-y-5 items-center justify-center bg-blue border-2 border-solid border-grey "
      style={{ top: position }}
    >
      <p className="text-white text-xl font-bold">myBLOOOG&#8482; Says :</p>
      <p className="text-white text-lg">{message}</p>
      <p className="text-white">Auto hide on {leftTime} Seconds</p>
    </div>
  );
};

export default Popup;
