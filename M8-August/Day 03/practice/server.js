const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "John Doe 1", email: "john1@example.com" },
  { id: 2, name: "John Doe 2", email: "john2@example.com" },
  { id: 3, name: "John Doe 3", email: "john3@example.com" },
];

app.get("/", (req, res) => {
  res.send("Hello Honey!");
});

// Get all the users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get only one user
app.get("/users/:id", (req, res) => {
  const user = users.find((ind) => {
    return ind.id === parseInt(req.params.id);
  });
  if (!user) return res.status(404).send("user not found");
  res.json(user);
});

// Create user
app.post("/users", (req, res) => {
  const createUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(createUser);
  res.json(createUser);
});

// update user
app.put("/users/:id", (req, res) => {
  const user = users.find((ind) => ind.id === parseInt(req.params.id));
  if (!user) return res.status(404).json("user not found");
  user.name = req.body.name;
  res.json(user);
});

// delete user
app.delete("/users/:id", (req, res) => {
  const user = users.findIndex((ind) => ind.id === parseInt(req.params.id));
  if (user === -1) return res.status(404).json("user not found");
  users.splice(user, 1);
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
