/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./content/**/*.{html,js,md}", "./layouts/**/*.{html,js}"],
  theme: {
  },
  plugins: [require("@tailwindcss/typography")],
};
