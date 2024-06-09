/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#b3e5fc',
        'medium-blue': '#29b6f6',
        'light-green': '#c8e6c9',
        'medium-green': '#81c784',
        'earth-brown': '#8d6e63',
      },
    },
  },
  plugins: [],
}