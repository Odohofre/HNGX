/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fcfeff',
        label: '#7c838a',
        input: '#b0bac3',
        link: '#f9ed32',
      },
    },
  },
  plugins: [],
};
