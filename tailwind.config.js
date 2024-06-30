/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Example primary color
        secondary: "#059669", // Example secondary color #
      },
    },
  },
  plugins: [],
};
