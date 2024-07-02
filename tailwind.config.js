/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.vue', 'index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
