/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'toleft': '-4px -2px 3px rgba(0, 0, 0, 0.6)',
        'tobottom': '0px 4px 5px rgba(0, 0, 0, 0.5)',
        'round': '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'light': '#9fe5ff',
      'dark': '#0d023c',
      'darker': '#070120',
      'reddish': '#980c0c'

    }
  },
  plugins: [],
}
