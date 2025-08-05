const express = require("express");
const app = express();
const cors = require("cors");

// More secure: only allow certain frontend

//Browsers block requests if frontend & backend run on different origins.
// E.g., React app (http://localhost:5173) calling Express server (http://localhost:3000) → blocked without CORS.

// app.use(cors()); // allows all origins
app.use(cors({ origin: "http://localhost:5173" }));


// Previously we needed body parsar, but now we dont need to define, express has built in body-parser, here's the previous code for reference:
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.use(express.json()); // built in body parsar


app.post("/post", (req, res) => {
  console.log("POST");
  console.log(req.body);
  res.json({ received: req.body });
});

app.listen(3000, () => console.log("Server running..."));