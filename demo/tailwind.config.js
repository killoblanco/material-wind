const MaterialWind = require('@killoblanco/material-wind')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [MaterialWind({ fontFamily: { body: 'Roboto Flex', heading: 'Roboto Flex' } })],
}