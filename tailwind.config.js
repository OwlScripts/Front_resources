/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'blue-hover-dark' : '#1E2763'
        },
        screens:{
          'hm':'980px',
        }
      },
    },
    daisyui: {
      themes: ['light'],
    },
    plugins: [require("daisyui")],
  }