/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
        ["responsive", "hover"]
      );
    },
  ],
};
