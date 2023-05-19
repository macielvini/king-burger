/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Suez One"],
      },
      colors: {
        background: "#F9F0DF",
        primary: " #D62300",
        secondary: "#FFF",
        ink: "#151522",
        accent: "#522714",
      },
      animation: {
        "pulse-once": "pulse 1s linear",
      },
    },
  },
  plugins: [],
};
