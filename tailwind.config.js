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
      boxShadow: {
        neumorphic: "inset 0rem 0.2rem 0.4rem 0 rgb(0,0,0,0.1)",
      },
      keyframes: {
        fadeInFast: {
          "0%": { opacity: 0, transform: "translate3d(0, 5%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeIn: {
          "0%": { opacity: 0, transform: "translate3d(0, 25%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeInLate: {
          "0%": { opacity: 0, transform: "translate3d(0, 25%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeInSuperLate: {
          "0%": { opacity: 0, transform: "translate3d(0, 25%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "fade-in-fast": "fadeInFast .75s ease-in-out forwards",
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        "fade-in-late": "fadeInLate 1.5s ease-in-out 1s forwards",
        "fade-in-super-late": "fadeInSuperLate 1.5s ease-in-out 2s forwards",
      },
    },
  },
  plugins: [],
};
