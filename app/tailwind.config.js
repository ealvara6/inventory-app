/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["views/*.{html,js,ejs}", "views/partials/*.{html,js,ejs}"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      offWhite: {
        100: '#F9F9F9',
        200: '#DCDCDA'
      },
      grey: {
        100: '#59544E',
        200: '#3D3534',
        300: '#211D1D',
      },
      silk: {
        100: '#B1B5A6',
        200: '#8A8D7E',
        300: '#67675F',
      },
      leather: '#AB732B'
    },
    extend: {},
  },
  plugins: [],
}

