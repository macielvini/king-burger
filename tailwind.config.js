/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Roboto"],
      },
      colors: {
        accent: "#ea580c",
      },
      animation: {
        "pulse-once": "pulse 1s linear",
      },
    },
  },
  plugins: [],
};
