/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      montserrat:['Montserrat', 'sans-serif'],
      ptsans:['PT Sans', 'sans-serif']
    },
    extend: {
      colors:{
        "main-white": "#f7f7f7",
        "dark-gray": "#3a3f47",
       "light-gray":"#5d646f",
        "main-yellow": "#f8b501",
      }
    },
  },
  plugins: [],
};
