/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cOrange: '#FC4100',
        cYellow: '#FFC55A',
        cNavy: '#00215E',
        cBlue: '#2C4E80',
      },
    },
  },
  plugins: [],
};
