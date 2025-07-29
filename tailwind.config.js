/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to scan all our project files for styles
  ],
  theme: {
    extend: {
      colors: {
        // Here we define our custom color palette from the image
        'b-dark-blue': '#213A57',
        'b-teal': '#0B6477',
        'b-cyan': '#14919B',
        'b-aqua': '#0AD1C8',
        'b-mint': '#45DFB1',
        'b-light-green': '#80ED99',
      }
    },
  },
  plugins: [],
}
