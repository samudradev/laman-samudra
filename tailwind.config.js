/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primer": {
          DEFAULT: colors["blue"][500],
          "hover": colors["blue"][700],
          "aktif": "",
          "lumpuh": "",
        },
        "sekunder": {
          DEFAULT: "",
          "hover": "",
          "aktif": "",
          "lumpuh": "",
        },
        "tertier": {
          DEFAULT: "",
          "hover": "",
          "aktif": "",
          "lumpuh": "",
        },
        "info": {
          DEFAULT: colors["cyan"][100],
          "hover": "",
          "aktif": "",
          "lumpuh": "",
          "tulisan": colors["cyan"][600],
        },
        "amaran": {
          DEFAULT: colors["amber"][100],
          "hover": "",
          "aktif": "",
          "lumpuh": "",
          "tulisan": colors["amber"][600],
        },
        "ralat": {
          DEFAULT: colors["red"][100],
          "hover": "",
          "aktif": "",
          "lumpuh": "",
          "tulisan": colors["red"][600],
        },
        "lain": {
          "dasar": "",
          "halimunan": "",
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.6xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
        h2: {
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
        h3: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
        h4: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
        h5: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
        h6: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primer.DEFAULT"),
        },
      });
    })
  ],
}
