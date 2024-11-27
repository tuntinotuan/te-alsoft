/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teColorPrimary: "#0036B4",
        teColorSeocondary: "#00D7F9",
      },
    },
  },
  plugins: [],
};
