import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkThemeContext } from "../../Context/DarkThemContext";

const Hero = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  console.log(isDarkTheme);
  const HeroIgUrI = isDarkTheme
    ? "https://lottie.host/d15419c3-fea4-441f-9d07-32011851652a/wwxfMc94DW.json"
    : "https://lottie.host/120b575e-d7b6-40ff-a432-5979cfe5dfec/vdC9aGf0ia.json";
  const linkStyle =
    "text-blue relative after:transition-all after:duration-500 after:scale-0 after:content-[''] after:absolute after:left-0 lg:after:top-7 after:top-[14px] after:w-full after:h-0.5 after:bg-blue after:rounded-lg hover:after:scale-100 lg:after:hover:top-7 after:hover:top-[14px] after:hover:left-0 after:hover:h-[2.5px]  after:hover:rounded-lg";

  return (
    <section className="flex flex-col items-center justify-center">
      <h3 className="lg:text-5xl text-2xl text-transparent leading-[4rem] text-center mt-10 font-extrabold bg-gradient-to-b from-blue to-white bg-clip-text  py-10">
        Start Point To Learn Mern Path
      </h3>
      <p className="lg:text-xl text-xs text-center text-gray">
        A Blog app made using TailwindCss, MongoDB, ExpressJs, ReactJs and
        NodeJs. <br />
        Remember: Give Them Just The Right Word, NO!
      </p>
      <DotLottieReact className="lg:w-[80rem]" src={HeroIgUrI} autoplay loop />
    </section>
  );
};

export default Hero;
