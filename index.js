const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.send("server running");
});

app.listen(PORT, () => {
  console.log("server running..");
});
