import React from "react";
import Header from "./Components/LayoutsComponents/Header";
import Footer from "./Components/LayoutsComponents/Footer";
import { Outlet } from "react-router-dom";
import { DarkThemeContext } from "./Context/DarkThemContext";
import { useContext } from "react";

const Layout = () => {
  const { isDarkTheme, setisDarkTheme } = useContext(DarkThemeContext);
  return (
    <main className={`h-auto ${isDarkTheme ? "bg-black" : ""} `}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
