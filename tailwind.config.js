/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Itim", 'sans-serif']
      },
      colors: {
        primary: 'black',
        white: '#ffffff',
      },
      screens: {
        xs: '480px',
        xl: '600px',
        pl: '900px',
        nb: '1050px',
        ok: '1250px',
        mx: '1500px'
      }
    },
  },
  plugins: [],
}