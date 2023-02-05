/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111'
      },
      backgroundImage: {
        blur: "url('./src/assets/blur.svg')",
      },
      backgroundSize: {
        cover: 'cover',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']

      }
    }
  },
  plugins: [],
}
