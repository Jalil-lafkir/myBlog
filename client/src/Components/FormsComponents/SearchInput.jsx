import React from "react";
import { useContext } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { DarkThemeContext } from "../../Context/DarkThemContext";

const SearchInput = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  return (
    <form className="flex justify-center items-center gap-x-2 ">
      <div className="text-sm  w-10 lg:w-80 h-10 rounded-md flex items-center justify-center relative">
        <FaSearch className="hidden lg:flex absolute z-20 left-2 text-lg text-blue hover:text-blue" />
        <input
          className={`w-10 lg:w-full px-8 text-gray border-2 border-gray border-solid rounded-md focus:outline-none absolute hidden lg:flex placeholder:text-gray focus:placeholder:text-blue ${
            isDarkTheme ? "bg-black" : ""
          } `}
          type="text"
          placeholder="Search..."
        />
        <button className="lg:hidden flex items-center justify-center rounded-md  w-full h-full border-2 border-solid border-gray hover:border-blue hover:text-blue">
          <FaSearch />
        </button>
        <FaFilter
          className="hidden lg:flex absolute z-20 right-2 text-lg text-gray"
          role="button"
        />
      </div>
      <button className="hidden lg:block text-lg text-gray bg-transparent w-28 h-11 rounded-md border-2 border-gray border-solid hover:border-blue hover:text-blue">
        Search
      </button>
    </form>
  );
};
export default SearchInput;
