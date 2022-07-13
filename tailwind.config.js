/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js,md}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
