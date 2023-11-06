/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}","./src/Components/*.js"],
    theme: {
      extend: {
        colors:{
          'blue-hover-dark' : '#1E2763'
        },
        screens: {
          'xs': '500px',
          // => @media (min-width: 992px) { ... }
        },
      },
    },
    daisyui: {
      themes: ['light'],
    },
    plugins: [require("daisyui")],
  }