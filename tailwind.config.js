/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation:{
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes:{
        'shake' : {
          '10%, 90%' : {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%' : {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%' : {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      },
    },
  },
  plugins: [],
}
