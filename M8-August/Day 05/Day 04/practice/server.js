const express = require("express");
const cors = require("cors");
const useRoute = require("./routes/users");

const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/users", useRoute);

app.listen(3000, () =>
  console.log("Server is running at: http://localhost:3000")
);