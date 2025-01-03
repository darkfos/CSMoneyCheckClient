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
        secondary: colors.slate[950],
        secondary_text: colors.white,
        secondary_h_text: colors.purple[700],
        secondary_text_hover: "",
      },
      backgroundColor: {
        primary_bg: colors.emerald[500],
        secondary_bg: colors.gray[500],
        secondary_footer_bg: colors.purple[900],
        secondary_button_bg: colors.yellow[500],
        secondary_button_bg_hover: colors.orange[600]
      },
      backgroundImage: {
        "cs-pattern": "url('/src/static/images/cs_back.png')"
      }
    },
  },
  plugins: [],
}