/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
