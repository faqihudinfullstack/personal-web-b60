const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const path = require("path");

const { formatDateToWIB, getRelativeTime } = require("./utils/time");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Assets"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});

hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

let blogs = [];

// HALAMAN HOME

app.get("/", (req, res) => {
  // res.send("Hello express! This is homepage");
  res.render("index");
  console.log("test");
});

// CONTAC ME
app.get("/contact", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("contact");
});

// Blog List
app.get("/blog", (req, res) => {
  console.log(blogs);
  res.render("blog-list", { blogs: blogs });
});

//Create Blog Page
app.get("/blog-create", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("blog-create");
});

// Submit New Blog
app.post("/blog-create", (req, res) => {
  const { title, content } = req.body; // title dan content adalah properti milik req.body
  console.log("judulnya adalah", title);
  console.log("contentnya :", content);

  let image = "https://picsum.photos/200/150";

  let newblog = {
    title: title,
    content: content,
    image: image,
    author: "M Abdurrahman Faqihudn",
    postedAt: new Date(),
  };

  blogs.push(newblog);

  res.redirect("/blog");
});

// Blog Detail
app.get("/blog/:id", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("blog-detail");
});

// Testimonials
app.get("/testimonials", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("testimonials");
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
