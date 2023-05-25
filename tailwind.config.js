/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        appLightGrey: '#ECECEC',
        appGrey: '#9B9AA6',
        appOrange: '#FF7853',
        appDark: '#26325E'
      },
      fontFamily: {
        'segoe': ['Segoe UI',]
      }
    },
  },
  plugins: [],
}