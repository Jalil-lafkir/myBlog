import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/LayoutsComponents/Header";
import Footer from "./Components/LayoutsComponents/Footer";
import { DarkThemeContext } from "./Context/DarkThemContext";

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
