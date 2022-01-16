const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["pages/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      light: "hsl(222, 15%, 87%)",
      grey: colors.gray,
      dark: "hsl(77, 12%, 11%)",
      primary: {
        lightest: "hsl(269, 97%, 75%)",
        light: "hsl(269, 97%, 65%)",
        base: "hsl(269, 97%, 55%)",
        dark: "hsl(269, 97%, 40%)",
        darkest: "hsl(269, 98%, 20%)",
      },
      secondary: {
        lightest: "hsl(30, 91%, 86%)",
        light: "hsl(30, 91%, 66%)",
        base: "hsl(30, 91%, 56%)",
        dark: "hsl(30, 91%, 46%)",
      },
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
          xl: "1760px",
        },
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      lineHeight: {
        xl: "1",
      },
      zIndex: {
        1: "1",
        100: "100",
        200: "200",
        500: "500",
        999: "999",
        max: "2147483647",
      },
    },
  },
}
