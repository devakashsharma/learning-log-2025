const fs = require("fs")

// Read file
fs.readFile("data.txt", "utf8", (error, data) => {
    if (error) {
        console.log('Error reading file:', error);
    } else {
        console.log("File content:", data);
    }
})