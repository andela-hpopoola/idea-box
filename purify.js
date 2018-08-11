const purify = require("purify-css");
const content = ["**/src/js/*.jsx", "**/src/html/*.js"];
const css = ["./src/components/App.css"];

const options = {
  output: "./src/app.min.css",

  // Will minify CSS code in addition to purify.
  minify: false,

  // Logs out removed selectors.
  rejected: false
};

purify(content, css, options);
