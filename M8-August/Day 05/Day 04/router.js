const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));