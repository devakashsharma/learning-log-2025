const express = require("express");
const app = express();

const users = [{ id: 1, name: "John", age: 25 }];

// Express Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something broke!" });
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "")
    return res.status(400).json({ err: "Name is required" });

  // Create new user
  const newUser = { id: user.length + 1, name, age: 25 };
  users.push(newUser);
  res.status(201).json(newUser);
});