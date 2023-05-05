/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "coverp":"url('/assets/coffe.jpeg')"
      }
    },
  },
  plugins: [],
}

