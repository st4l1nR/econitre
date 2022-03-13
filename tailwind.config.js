const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D4A",
        secondary: "#6AC17D",
      },
      fontFamily: {
        sans: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
        poppins:["Poppins"]
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
