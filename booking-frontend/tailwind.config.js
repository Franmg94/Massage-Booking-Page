/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#b3e5fc",
        "medium-blue": "#29b6f6",
        "light-green": "#c8e6c9",
        "medium-green": "#81c784",
        "earth-brown": "#8d6e63",
        
      },
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'heebo' : ['Heebo', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-md": {
            "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            "text-shadow": "4px 4px 8px rgba(0, 0, 0, 0.5)",
          },

          // SLIDING FORM

          '.title-form': {
            '@apply text-2xl font-semibold mb-4 tracking-wider font-abril': {},
          },
          '.button-form--base': {
            '@apply p-2 w-full text-left font-raleway block text-lg': {},
          },
          '.button-form--hover': {
            '@apply hover:bg-slate-200 hover:text-black': {},
          },
          '.button-form--selected': {
            '@apply bg-black text-white': {},
          },
          '.button-form--unselected': {
            '@apply bg-white text-black': {},
          },
          '.paragraph-form': {
            '@apply text-sm mt-2 font-heebo': {},
          },
          '.next-button': {
            '@apply border-2 border-black tracking-wider uppercase py-1 px-2 hover:text-white hover:bg-black transform transition-transform duration-300': {},
          }
        },
        ["responsive", "hover"]
      );
    },
  ],
};
