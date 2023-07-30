/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bmove': "bmove 10s ease-in-out infinite",
      },
      keyframes: {
        'bmove': {
          "0%": { "background-position": "20% 50%" },
          "50%": { "background-position": "100% 20%" },
          "100%": { "background-position": "20% 50%" },
        },
      },
    },
  },
  plugins: [],
};

