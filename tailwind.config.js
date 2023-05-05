/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "coverp":"url('/assets/vg.jpeg')"
      }
    },
  },
  plugins: [],
}

