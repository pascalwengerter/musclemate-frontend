/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6DEAA7",
        secondary: "#43CDEC",
        dark: "#183A4B",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
