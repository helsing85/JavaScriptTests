const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// jaki tryb pracy
const isDevelopment = process.env.NODE_ENV !== "production";
const port = isDevelopment ? 3001 : 3001;

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.get("/", (req, res) => {
  const message = "Hello World! !!!";
  res.json(message);
});

app.get("/api/first-data", (req, res) => {
  const message = "Hello World 22! !!!";
  res.json(message);
}); */

function addHours(numOfHours, date = new Date()) {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
}

function formatDate(date){
  date = date.toISOString();
  date = date.replace("T", " ");
  date = date.substring(0, 19);
  return date
}

app.get("/api/tasks", (req, res) => {
  const tasks = [
    {
      id: 1,
      name: "First Srv",
      date: formatDate(addHours(1)),
      status: "not-completed",
    },
    {
      id: 2,
      name: "Second Srv",
      date: formatDate(addHours(2)),
      status: "not-completed",
    },
  ];
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
