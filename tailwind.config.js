module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/*.js",
  ],
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
