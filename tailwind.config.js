/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansinter: ['Inter', 'sans-serif'],
        sanspoppins: ['Poppins', 'sans-serif'],
        sansmontserrat: ['Montserrat', 'sans-serif'],
        sansfredoka: ['Fredoka', 'sans-serif'],
        sansfrancoisone: ['Francois One', 'sans-serif'],
        serifalexbrush: ['Alex Brush', 'cursive'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};