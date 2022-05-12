const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
  base: "deploying-vite-project",
  plugins: [createVuePlugin()],
};
