const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/front/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        hind_guntur: ["Hind Guntur", ...defaultTheme.fontFamily.sans],
        expletus_sans: ["Expletus Sans", ...defaultTheme.fontFamily.sans],
        trirong: ["Trirong", ...defaultTheme.fontFamily.sans],
        alegreya: ["Alegreya Sans SC", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          500: "#468446",
        },
        yellow: {
          400: "#fde47f"
        },
        blue: {
          100: "#67917a"
        },
        gray: {
          700: "#1e1e1e",
        },
      },
      backgroundImage: {
        "logo-black": "url('images/logo-black.svg')",
        "logo": "url('images/logo.svg')",
      },
      backgroundSize: {
        "50%": "50%",
        "20%": "20%",
      },
      gridTemplateColumns: {
        films: "repeat(auto-fit, minmax(18rem, 1fr))",
        "films-md": "repeat(auto-fit, minmax(17rem, 1fr))",
      },
      screens: {
        "xxl": "1700px",
        "3xl": "1275px",
        "4xl": "1580px",
        "5xl": "1710px",
        "2xxl": "2000px",
        "3xxl": "2460px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}
