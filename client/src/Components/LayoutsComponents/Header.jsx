import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { Profile } from "../UserComponents/User";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { UserContext } from "../../Context/UserContext.jsx";
import { DarkThemeContext } from "../../Context/DarkThemContext";

const Header = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  const backgroundColor = isDarkTheme ? "black" : "white";
  const borderStyle = isDarkTheme ? "1px solid #5b5b5b" : "";
  const [isRenderd, setisRenderd] = useState(false);
  const { user } = UserContext();

  const linkStyle =
    "text-white lg:text-gray relative after:transition-all after:duration-500 after:scale-0 after:content-[''] after:absolute after:left-0 after:top-7 after:w-full after:h-0.5 after:bg-white lg:after:bg-gray after:rounded-lg hover:after:scale-100 after:hover:top-7 after:hover:left-0 after:hover:h-[2.5px]  after:hover:rounded-lg";
  const activeTab =
    "text-white relative  after:content-[''] after:absolute after:left-0 after:top-7 after:block after:w-full after:h-[2.5px] after:bg-white after:rounded-lg";

  const hideMenu = () => {
    event.preventDefault();
    setisRenderd(!isRenderd);
  };

  const Registration = () => {
    return (
      <Link
        to="/Registration"
        className="lg:block lg:text-gray text-white border border-solid transition-all duration-200 lg:border-gray border-white text-xl px-4 py-2 rounded-md hover:opacity-65"
        onClick={hideMenu}
      >
        Registration
      </Link>
    );
  };

  return (
    <>
      <header
        className={`w-full p-8 h-36  ${
          isDarkTheme ? "bg-black" : "bg-gradient-to-b from-blue to-white"
        }  lg:flex lg:justify-between lg:items-center lg:px-28`}
      >
        <Link
          to="/"
          className="text-gray text-4xl lg:text-6xl font-black absulote z-10"
        >
          myBlOOOG
        </Link>

        <button
          className="absolute text-gray text-4xl top-9 right-7 z-10 lg:hidden"
          onClick={() => {
            setisRenderd(!isRenderd);
          }}
        >
          {isRenderd ? <HiOutlineX /> : <HiMenuAlt1 />}
        </button>

        <nav
          className={`flex flex-col text-xl justify-center items-start gap-y-5 w-[95%]  absolute px-4 py-8 ${
            isDarkTheme
              ? "bg-black border border-solid border-gray lg:border-none"
              : "bg-blue"
          }  rounded-lg left-[50%] translate-x-[-50%] 
            transition-all duration-500 z-10
            ${!isRenderd ? "top-[-1000px]" : "top-[100px]"}
            lg:flex lg:flex-row lg:gap-x-12 lg:justify-evenly lg:items-center lg:relative lg:top-0  lg:w-[60%] lg:bg-transparent lg:left-0 lg:translate-x-0 lg:blur-0`}
        >
          <div className="flex flex-col justify-center items-start gap-4 p-4 lg:flex lg:flex-row lg:gap-8 lg:my-0">
            <Link to="/" className={linkStyle} onClick={hideMenu}>
              Blogs
            </Link>

            <Link to="/" className={linkStyle} onClick={hideMenu}>
              Contacts
            </Link>
            <Link to="/" className={linkStyle} onClick={hideMenu}>
              About
            </Link>
            <Link
              to="/newPost"
              className={`${linkStyle} flex items-center justify-center gap-x-1`}
              onClick={hideMenu}
            >
              <FaPenToSquare className="hidden lg:block" />
              Write
            </Link>
          </div>
          {user ? <Profile user={user} /> : <Registration />}
        </nav>
      </header>
    </>
  );
};

export default Header;
