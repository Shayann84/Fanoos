/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html',
  './src/**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        chalky: ['Chalky', 'cursive'],
      },
    },
  },
  plugins: [],
};