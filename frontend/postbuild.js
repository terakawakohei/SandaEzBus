const path = require("path");
const fs = require("fs-extra");

const BUILD_DIR = path.join(__dirname, "./.next/server/pages");
const PUBLIC_DIR = path.join(__dirname, "../src/main/resources/public");

console.log("start postbuild script...");
fs.emptyDirSync(PUBLIC_DIR);
fs.copySync(BUILD_DIR, PUBLIC_DIR);
