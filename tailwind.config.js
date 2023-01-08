/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wordle-bg": "#121213",
        "wordle-border": "#1a1a1b",
        "wordle-btn": "#818384",
        "wordle-wrong": "#3a3a3c",
        "wordle-yellow": "#b59f3b",
        "wordle-green": "#538d4e",
        "wordle-text": "#ffffff",
        "wordle-warning": "#f7da21",
      },
      fontFamily: {
        arial: "Arial",
      },
      boxShadow: {
        "3xl": "0 0 10px rgba(0,0,0,.5)",
      },
    },
  },
  plugins: [],
};
