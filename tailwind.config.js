/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3'
      },
      dropShadow: {
        shinePrimary: '0px 4px 14px 0px rgba(0, 118, 255, 0.39)'
      }
    },
    fontFamily: {
      fancy: ['Montserrat'],
      body: ['Poppins'],
    },
  },
  plugins: [],
}
