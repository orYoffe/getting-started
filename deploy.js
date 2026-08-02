const { execSync } = require("child_process");
const fs = require("fs");

execSync("npm run build", { stdio: "inherit" });
fs.writeFileSync("out/.nojekyll", "");
execSync("git add out/", { stdio: "inherit" });
execSync('git commit -m "Deploy Next.js to gh-pages"', { stdio: "inherit" });
execSync("git subtree push --prefix out origin gh-pages", { stdio: "inherit" });
