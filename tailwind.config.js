/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/input.css',
  './pages/**/*.{html,js}',
],

  theme: {
    extend: {
      fontFamily: {
        'maven': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

