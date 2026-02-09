/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "highlight-color": "#ffc700",
        "gray-color": "#888888",
        "black-color": "#111111",
        "field-background": "#2b2b2b",
        "skeleton-background": "#424242",
        "chip-background": "#2a2a2a",
      },
      fontFamily: {
        "poppins-regular": ["Poppins_400Regular"],
        "poppins-bold": ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
