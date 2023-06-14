/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'playFair': ['PlayfairDisplay', 'sans-serif'] 
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
  plugins: [require('daisyui')],
}
//, require('flowbite/plugin'),require('@tailwindcss/typography')