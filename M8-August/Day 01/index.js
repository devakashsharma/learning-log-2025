const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hehe")
})

server.listen(3000, () => {
    console.log("Running server on http://localhost:3000/");
})