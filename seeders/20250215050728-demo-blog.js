"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Blogs", [
      {
        authorId: 1,
        title: "Postgres is Cool",
        image: "/img/gambar3.jpg",
        content:
          "Sudah menjadi fakta umum bahwa pembaca akan terganggu oleh konten halaman yang dapat dibaca saat melihat tata letaknya.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 1,
        title: "Javascript is Awesome",
        image: "/img/gambar2.jpg",
        content:
          "Nulla blandit tellus quis diam volutpat, finibus condimentum ligula faucibus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        title: "Bootstrap As CSS Tools",
        image: "/img/gambar4.jpg",
        content:
          "Fusce tristique dui lacus, pellentesque molestie est suscipit eget. Nulla quis odio nec leo dictum finibus quis non augue.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
