const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override");

const {
  renderBlogEdit,
  createBlogg,
  updateBlog,
} = require("./controllers/controller-v1");

const {
  renderBlog,
  renderBlogDetail,
  deleteBlog,
} = require("./controllers/controller-v2");

const { formatDateToWIB, getRelativeTime } = require("./utils/time");

const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Assets"));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});

hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

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

// Blog List
app.get("/blog", renderBlog);

//Create Blog Page
app.get("/blog-create", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("blog-create");
});

// Submit Create New Blog
app.post("/blog-create", createBlogg);

// Render Edit Blog
app.get("/blog-edit/:id", renderBlogEdit);

// Submit/Save Edit Blog
app.patch("/blog-update/:id", updateBlog);

// DELET EXISTING BLOG
app.delete("/blog/:id", deleteBlog);

// Blog Detail
app.get("/blog/:id", renderBlogDetail);

// Testimonials
app.get("/testimonials", (req, res) => {
  // res.send("Hello express! This is homepage");

  res.render("testimonials");
});

app.get("*", (req, res) => {
  res.render("page-404");
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});
