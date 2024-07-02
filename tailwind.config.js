/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
        secondary: ["Junge", "cursive"],
      },
      colors: {
        primary: "#0f172a", // Example primary color
        secondary: "#059669", // Example secondary color #
      },
    },
  },
  plugins: [],
};
