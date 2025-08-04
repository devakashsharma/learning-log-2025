const express = require("express");
const app = express();

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next(); // go to next middleware/route
});

app.get("/", (req, res) => {
  res.send("Hello Honey, Middleware logged your visit!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/greet/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
