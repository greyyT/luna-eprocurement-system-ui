/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        70: '17.5rem',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
      },
      colors: {
        primary: '#3056D3',
        warn: '#FF0000',
        black: '#212B36',
        mainBg: '#F9FAFB',
        mainText: '#637381',
      },
    },
  },
  plugins: [],
};
