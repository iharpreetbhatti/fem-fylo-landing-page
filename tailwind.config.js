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
      },
      backgroundImage: {
        "curve-desktop": "url('./images/bg-curve-desktop.svg')",
        "curve-mobile": "url('./images/bg-curve-mobile.svg')"
      }
    }
  },
  plugins: []
}
