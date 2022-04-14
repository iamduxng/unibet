module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        gray: {
          1000: '#222'
        }
      }
    },
  },
  plugins: [],
}
