/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
      },
      colors: {
        'gym-red': '#ef4444',
        'gym-blue': '#3b82f6',
      },
    },
  },
  plugins: [],
}
