/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}","./src/Components/*.js"],
    theme: {
      extend: {
        colors:{
          'blue-hover-dark' : '#1E2763'
        },
      },
    },
    daisyui: {
      themes: ['light'],
    },
    plugins: [require("daisyui")],
  }