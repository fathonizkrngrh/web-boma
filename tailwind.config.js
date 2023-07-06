/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        main: "#0C4387",
      },
      backgroundImage: {
        hero: "url('../src/assets/bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
