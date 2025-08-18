import express from "express";
import cors from "cors";
import useRoutes from "./routes/tasks.js";
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/task", useRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});