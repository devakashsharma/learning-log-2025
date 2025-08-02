const path = require("path")

console.log("Directory name: ", __dirname);
console.log("File name: ", __filename);

const fullPath = path.join(__dirname + "test.txt")
console.log("Full Path: ", fullPath);