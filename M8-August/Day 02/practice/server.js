const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath  = path.join(__dirname, "message.txt");
  
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Error reading the file.");
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
