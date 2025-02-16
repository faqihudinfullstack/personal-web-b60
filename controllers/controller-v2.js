const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const { Blog } = require("../models");

const sequelize = new Sequelize(config.development);

async function renderBlog(req, res) {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });

  console.log("hasil fetch data dari controller v2", blogs);
  res.render("blog-list", { blogs: blogs });
}

async function renderBlogDetail(req, res) {
  const id = req.params.id;

  // type datanya sudah object bukan lagi array jadi tidak perlu index
  const blogYangDipilih = await Blog.findOne({
    where: {
      id: id,
    },
  });

  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 blog detail :", blogYangDipilih);

    res.render("blog-detail", { blog: blogYangDipilih });
  }
}

async function renderBlogCreate(req, res) {
  //render halaman create blog
}

async function createBlog(req, res) {
  //create blog submission
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  const deleteResult = await Blog.destroy({
    where: {
      id: id,
    },
  });

  console.log("result delete :", deleteResult);

  res.redirect("/blog");
}

async function renderBlogEdit(req, res) {
  //render halaman edit blog
}

async function updateBlog(req, res) {
  //update blog submission
}

module.exports = { renderBlog, renderBlogDetail, deleteBlog };
