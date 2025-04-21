const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(
    "Welcome CTP students ! You will be building an Express.js app and test a simple RESTful API for managing tasks"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
