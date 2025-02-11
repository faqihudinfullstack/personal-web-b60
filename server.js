const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("Assets"));

// HALAMAN HOME

app.get("/", (req, res) => {
  // res.send("Hello express! This is homepage");
  res.render("index");
});

// CONTAC ME
app.get("/contact", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("contact");
});

// Blog
app.get("/clog", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("blog");
});

// REQUEST PARAMS

app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello ini halaman tentang ${id}`);
});

// REQUEST QUARY

app.get("/blog", (req, res) => {
  const { title, author, year } = req.query;

  res.send(`ini halaman blog ${title} dengan author ${author} tahun ${year}`);
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});
