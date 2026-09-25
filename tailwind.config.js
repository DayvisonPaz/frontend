/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
    colors: {
      paper: "#F4F1E9",
      ink: "#141414",
      navy: "#1B2A4A",
      rust: "#C1502E",
      stone: "#6B6558",
    },
    fontFamily: {
      display: ["Fraunces", "serif"],
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
},
  plugins: [],
}