/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "851px" },
        lg: { min: "761px", max: "850px" },
        md: { min: "521px", max: "760px" },
        sm: { min: "381px", max: "520px" },
        xs: { max: "380px" },
      },

      backgroundImage: {
        "": "url('');",
      },
    },
  },
  plugins: [],
};
