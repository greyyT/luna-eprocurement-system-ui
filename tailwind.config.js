/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
      },
      colors: {
        primary: '#843fff',
        warn: '#FF0000',
      },
    },
  },
  plugins: [],
};
