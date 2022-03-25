module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'one-layout': '100px minmax(calc(100% - 100px), calc(100% - 100px))'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
