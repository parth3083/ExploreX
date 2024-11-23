const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const searchCount = require("./routes/searchCount");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
connectDb();

app.get("/", (req, res) => {
  res.send("Backend started working!!!");
});

app.post("/search-count", searchCount);

app.listen(process.env.PORT, () => {
  console.log("Server started on http://localhost:8000");
});
