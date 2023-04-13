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
      },
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        "light-grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)"
      }
    }
  },
  plugins: []
}
