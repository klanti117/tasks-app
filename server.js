const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let notes = require("./data");
app.get("/notes", (req, res) => {
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
