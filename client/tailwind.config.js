/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#6e0a0b',
        'primary-gold': '#fcd98d',
      }
    },
  },
  plugins: [],
}

