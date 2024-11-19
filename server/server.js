const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Backend started working!!!");
});
app.listen(process.env.PORT, () => {
  console.log("Server started on http://localhost:8000");
});
