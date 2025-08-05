const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Honey", email: "honey@example.com" },
  { id: 3, name: "Babe", email: "babe@example.com" },
];

// Get all the users
router.get("/", (req, res) => {
  res.json(users);
});

// get a user by id
router.get("/:id", (req, res) => {
  const user = users.find((ind) => ind.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Get a user by id
router.post("/", (req, res) => {
  const { name } = req.body;
  const { email } = req.body;

  if(!name || name.trim() === "" || !email || email.trim() === "") {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const user = {
    id: users.length + 1,
    name,
    email
  }
  users.push(user);
  res.json(users)
});

module.exports = router;