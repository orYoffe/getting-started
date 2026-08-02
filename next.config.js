// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/getting-started" : "";

module.exports = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
