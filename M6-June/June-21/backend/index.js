import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// route
app.get("/api/route", (req, res) => {
  //   res.send('This is a route response!');
  const route = [
    { id: 1, title: "Route 1", description: "This is the first route" },
    { id: 2, title: "Route 2", description: "This is the second route" },
    { id: 3, title: "Route 3", description: "This is the third route" },
    { id: 4, title: "Route 4", description: "This is the fourth route" },
    { id: 5, title: "Route 5", description: "This is the fifth route" },
  ];
  res.send(route);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
