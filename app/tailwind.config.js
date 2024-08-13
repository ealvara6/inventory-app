/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["views/*.{html,js,ejs}", "views/partials/*.{html,js,ejs}"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      beige: {
        100: '#FDE4D0',
        200: '#FCE3CF',
        300: '#FAE1CD',
        400: '#FBE2CE',
        500: '#F5D9C9'
      },
      rosePink: '#F28A95',
      dullPurple: {
        100: '#855459',
        200: '#936567'
      },
      fadedPink: '#D3A1AD',
    },
    extend: {},
  },
  plugins: [],
}

