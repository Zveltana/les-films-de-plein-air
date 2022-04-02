let tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    tailwindcss("./build/front/tailwind.config.js"),
    require("autoprefixer"),
  ],
};