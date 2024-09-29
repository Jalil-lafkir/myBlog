import { useContext, useState, createContext } from "react";
export const DarkThemeContext = createContext({});
export const DarkthemeState = () => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  return { isDarkTheme, setisDarkTheme };
};
