const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.js",
    "./src/**/**/*.{js,jsx}",
    "./src/**/*/*.{js,jsx}",
    "./src/**/*.jsx",
  ],
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.js",
    "./src/**/**/*.{js,jsx}",
    "./src/**/*/*.{js,jsx}",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald[500],
        primary_text: "#374151",
        primary_ac_text: "#60A5FA",
        primary_text_hover: "#F3F4F6",
        secondary: colors.indigo[500],
        secondary_text: "#F3F4F6",
        secondary_text_hover: "",
      },
      backgroundColor: {
        primary_bg: colors.emerald[500],
        secondary_bg: colors.gray[500]
      },
      backgroundImage: {
        "cs-pattern": "url('/src/static/images/cs_back.png')"
      }
    },
  },
  plugins: [],
}