const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "out/index.html",
  "out/HTML/index.html",
  "out/CSS/index.html",
  "out/JavaScript/index.html",
  "out/Node.js/index.html",
  "out/robots.txt",
  "out/sitemap.xml",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    throw new Error(`Missing static export: ${file}`);
  }
}

const homepage = fs.readFileSync(path.join(process.cwd(), "out/index.html"), "utf8");
const guideLinks = ["HTML", "CSS", "JavaScript", "Node.js"];

for (const guide of guideLinks) {
  if (!homepage.includes(`/getting-started/${guide}`)) {
    throw new Error(`Homepage is missing the ${guide} guide link`);
  }
}

const htmlGuide = fs.readFileSync(
  path.join(process.cwd(), "out/HTML/index.html"),
  "utf8"
);

if (!htmlGuide.includes('rel="canonical"')) {
  throw new Error("Guide pages must include a canonical URL");
}

if (!htmlGuide.includes('application/ld+json')) {
  throw new Error("Guide pages must include structured data");
}

console.log("Static export smoke tests passed.");
