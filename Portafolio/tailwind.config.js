/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#232327',
        primarySecond:'#17171A',
        secondary:'#fe2179',
        complementary:'#5eeaff'
      }
    },
  },
  plugins: [],
}

