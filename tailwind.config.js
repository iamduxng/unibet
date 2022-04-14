module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#222'
        },
        green: {
          primary: '#2e7423'
        }
      },
      backgroundImage: {
        'gradient-green-primary': 'radial-gradient(#2f8e2c, #2e7423)'
      }
    },
  },
  plugins: [],
}
