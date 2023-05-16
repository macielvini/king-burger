/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Suez One"],
      },
      colors: {
        background: "#fff",
        ink: "#151522",
        accent: "#522714",
        primary: " #D62300",
        secondary: "#f5ebdc",
      },
      animation: {
        "pulse-once": "pulse 1s linear",
      },
    },
  },
  plugins: [],
};
