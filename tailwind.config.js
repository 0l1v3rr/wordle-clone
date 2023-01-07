/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wordle-bg": "#121213",
        "wordle-btn": "#818384",
        "wordle-wrong": "#3a3a3c",
        "wordle-yellow": "#b59f3b",
        "wordle-green": "#538d4e",
        "wordle-text": "#ffffff",
      },
      fontFamily: {
        arial: "Arial",
      },
    },
  },
  plugins: [],
};
