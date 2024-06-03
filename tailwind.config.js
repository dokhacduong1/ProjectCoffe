/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./public/**/*.{html,js}"],
    options: {
      safelist: [],
    },
  },
 
  theme: {
    extend: {
      fontFamily:{
        Karla: ['Karla', 'sans-serif'],
      },
      colors:{
        'light-coffee': '#C89F94',
      },
      keyframes:{
        slideDown:{
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        slideUp:{
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-100%)'}
        }
      },
      animation:{
        slideDown: 'slideDown 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

