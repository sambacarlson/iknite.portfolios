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
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'light': '#ccfbf1',
      'dark': '#09083B',
      'darker': '#000015'

    }
  },
  plugins: [],
}
