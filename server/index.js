const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect('')

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
