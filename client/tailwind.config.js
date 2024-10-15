/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#4d80e4",
        gray: "#5b5b5b",
        transparent: "transparent",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1098px",
      xl: "1440px",
    },

    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secodary: ["JetBrainsMono", "sans-serif"],
    },
  },

  plugins: [flowbite.plugin()],
};
