/** @type {import('tailwindcss').Config} */
const { THEME } = require('./colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nunito": "Nunito-Regular",
        "nunito-bold": "Nunito-Bold",
        "nunito-black": "Nunito-Black",
        "nunito-medium": "Nunito-Medium",
        "nunito-semibold": "Nunito-SemiBold",
        "nunito-extrabold": "Nunito-ExtraBold",
        "cabin": "Cabin-Regular",
        "cabin-bold": "Cabin-Bold",
        "cabin-medium": "Cabin-Medium",
        "cabin-semibold": "Cabin-SemiBold"
      },
      colors: THEME.colors,
    }
  },
  plugins: [],
}