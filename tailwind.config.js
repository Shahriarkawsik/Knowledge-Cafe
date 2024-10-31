/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1: 'rgb(17, 17, 17)',
        color105: 'rgba(17, 17, 17,0.05)',
        color2: 'rgb(96, 71, 236)',
        color21: 'rgb(96, 71, 236,0.1)'
      }
    },
  },
  plugins: [],
}
