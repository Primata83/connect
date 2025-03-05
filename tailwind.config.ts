/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          gray: {
            100: '#DAE4F2',
            200: '#C8D0DA',
            300: '#95A1B1',
            400: '#6F7D90',
            500: '#2A313C',
            600: '#21252C',
            700: '#191D24',
            800: '#13161B',
            900: '#0F1216',
          }
        },
        fontFamily: {
          oxanium: ['var(--font-oxanium)'],
          montserrat: ['var(--font-montserrat)'],
        },
        backgroundImage: {
          'custom-background': "url('/background.png')",
        }
      },
    },
    plugins: [],
  }