const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
    // res.writeHead(200, "Content-Type: text/plain");
    // res.end("Hello, World!");
    
    res.writeHead(200, "Content-Type: applilcation/json");
    res.end(JSON.stringify({ message: "Hello World", status: "success" }));
    // res.end("Hello, World!");
})

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})