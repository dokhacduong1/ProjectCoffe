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
        'coffee': {
          200: '#C89F94',
          300: '#b48f85',
          400: '#8c6f68',
          500: '#785f59',
          600: '#50403b',
          700: '#50403b',
          800: '#3c302c',
          900: '#28201e',
        }
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

