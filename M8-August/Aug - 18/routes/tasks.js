import express from "express";
const router = express.Router();

const users = [
  { id: 1, title: "task no 1", completed: false },
  { id: 2, title: "task no 2", completed: false },
  { id: 3, title: "task no 3", completed: false },
  { id: 4, title: "task no 4", completed: false },
];

// get all data
router.get("/", (req, res) => {
  res.json(users);
});

// get selected data by id
router.get("/:id", (req, res) => {
  const user = users.find((ind) => ind.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ messcompleted: "User not found" });
  res.json(user);
});

// post/create new data
router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title || !completed) {
    return res.status(400).json({ messcompleted: "title and completed are required" });
  }

  const newUser = {
    id: users.length + 1,
    title,
    completed,
  };

  users.push(newUser);
  res.json(newUser);
});

// put/update existing data
router.put("/:id", (req, res) => {
  const user = users.find((ind) => ind.id === parseInt(req.params.id));
  if (!user) return res.status(400).send("User Not found");

  const { title, completed } = req.body;
  if (title) user.title = title;
  if (completed) user.completed = completed;

  res.json(user);
});

// delete specific data
router.delete("/:id", (req, res) => {
  const index = users.findIndex((ind) => ind.id === parseInt(req.params.id));
  if (index === -1) return res.status(400).send("User Not found");

  const deleted = users.splice(index, 1);
  res.json(deleted[0]);
});

export default router;