const url = require("postcss-url");
const imports = require("postcss-import");
const nested = require("postcss-nested");
const postCSSPresetEnv = require("postcss-preset-env");
const browsers = require("browserslist");
const cssnano = require("cssnano");
const mixins = require("postcss-mixins");

module.exports = () => ({
  plugins: [
    url,
    imports({
      path: "assets/css",
    }),
    mixins,
    nested,
    postCSSPresetEnv({
      stage: 1,
    }),
    cssnano({
      preset: "default",
    }),
  ],
});
