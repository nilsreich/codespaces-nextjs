/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        noto:['Noto Sans Display', 'sans-serif'],
      },
      colors: {
        tomato: {
          50: '#fffcfc',
          100: '#fff8f7',
          200: '#fff0ee',
          300: '#ffe6e2',
          400: '#fdd8d3',
          500: '#fac7be',
          600: '#f3b0a2',
          700: '#ea9280',
          800: '#e54d2e',
          900: '#db4324',
          1000: '#ca3214',
          1100: '#341711',
        },
        firefly: {
          DEFAULT: '#102336',
          50: '#3573B2',
          100: '#316AA4',
          200: '#285989',
          300: '#20476D',
          400: '#183552',
          500: '#102336',
          600: '#0E1E2E',
          700: '#0B1926',
          800: '#09141E',
          900: '#070F17',
        },
        'pale-sky': {
          DEFAULT: '#6B7C84',
          50: '#CFD5D8',
          100: '#C3CBCF',
          200: '#ADB7BC',
          300: '#96A4AA',
          400: '#809098',
          500: '#6B7C84',
          600: '#525F65',
          700: '#394246',
          800: '#202527',
          900: '#070808',
        },
      },
    },  },
  plugins: [],
}