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
        primary: "#292830", // black
        secondary: "#5da7ae", // blue green
        third: "#543d46", // grape
        fourth: "#f87171", // red
        fifth: "#ebe9e1", // tan

        fourthTwo: "#fceecf",
        secondaryTwo: "#cce3e5", // blue
      },
      boxShadow: {
        neumorphic: "inset 0rem 0.3rem 0.3rem 0 rgb(0,0,0,0.1)",
      },
      keyframes: {
        fadeInFast: {
          "0%": { opacity: 0, transform: "translate3d(0, 5%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeIn: {
          "0%": { opacity: 0, transform: "translate3d(-11px, -11px, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeInLate: {
          "0%": { opacity: 0, transform: "translate3d(11px, 11px, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        fadeInSuperLate: {
          "0%": { opacity: 0, transform: "translate3d(0, -5px, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        fadeInBg: {
          "0%": { opacity: 0, transform: "translate3d(0, 0, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "fade-in-fast": "fadeInFast .75s ease-in-out forwards",
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        "fade-in-late": "fadeInLate 1.5s ease-in-out forwards",
        "fade-in-super-late": "fadeInSuperLate 1.5s ease-in-out 2s forwards",
        "fade-in-bg": "fadeInSuperLate 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
