/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        md: { min: "416px", max: "850px" },

        sm: { max: "415px" },
      },
    },
  },
  plugins: [],
};

