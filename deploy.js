const { execSync } = require("child_process");
const fs = require("fs");

execSync("npm run build");
execSync("npm run export");
fs.writeFileSync("out/.nojekyll", "");
execSync("git add out/");
execSync('git commit -m "Deploy Next.js to gh-pages"');
execSync("git subtree push --prefix out origin gh-pages");
