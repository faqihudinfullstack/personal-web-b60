const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// REQUEST QUARY

// app.get("/blog", (req, res) => {
//   const title = req.query.title;
//   const author = req.query.author;

//   res.send(`ini halaman blog ${title} dengan author ${author}`);
// });

// app.listen(prompt, () => {
//   console.log(`My personal web app listening on port ${port}`);
// });
