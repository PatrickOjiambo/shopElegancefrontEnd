/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        Poppins: ['Poppins', "sans-serif"]
      },
      colors: {
       inputGray: "#F5F5F5",
       buttonPink: "#DB4444"
      },
    },
  },
  plugins: [],
}