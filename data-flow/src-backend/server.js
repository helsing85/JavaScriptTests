const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// jaki tryb pracy
const isDevelopment = process.env.NODE_ENV !== "production";
const port = isDevelopment ? 3001 : 3001;

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const message = "Hello World! !!!";
  res.json(message);
});

app.get("/api/first-data", (req, res) => {
  const message = "Hello World 22! !!!";
  res.json(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
