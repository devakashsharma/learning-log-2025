const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Doe John", email: "doe@example.com" },
];

// Read All users
app.get("/users", (req, res) => {
  res.json(users);
});

// Read one user
app.get("/users/:id", (req, res) => {
  // const name = req.params.name;
  const visit = users.find((user) => user.id === parseInt(req.params.id));
  if (!visit) return res.status(404).send("user not found");
  res.json(visit);
});

// Create new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put("/users/:id", (req, res) => {
  const visit = users.find((user) => user.id === parseInt(req.params.id));
  if (!visit) return res.status(404).send("user not found");
  visit.name = req.body.name;
  res.json(visit);
});

// delete user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("user not found");
  const deleted = users.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(3000, () =>
  console.log("Server is running on port http://localhost:3000")
);
