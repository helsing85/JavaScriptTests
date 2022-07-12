const express = require("express");
const app = express();

const isDevelopment = process.env.NODE_ENV !== "production";
const port = isDevelopment ? 3001 : 3000;

app.get("/api/users/", (req, res) => {
  //res.send("Hello World!");

  const usersDataArray = [
    {
      id: 1,
      firstName: "Jan",
      secondName: "Kowalski",
      isActive: true,
      lastLoginDate: "2022-07-12 12:04:11",
    },
    {
      id: 2,
      firstName: "Maria",
      secondName: "Nowak",
      isActive: false,
      lastLoginDate: "2022-07-12 10:04:11",
    },
  ];

  res.json(usersDataArray);
});

app.get("/api/books/", (req, res) => {
  
    const booksDataArray = [
      {
        id: 3,
        title: "Tytuł 1",
        author: "Autor 1",
        isAvailable: true,
      },
      {
        id: 4,
        title: "Tytuł 2",
        author: "Autor 2",
        isAvailable: false,
      },
    ];
  
    res.json(booksDataArray);
  });

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});
