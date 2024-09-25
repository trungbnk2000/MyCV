/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        title: '#334155'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
