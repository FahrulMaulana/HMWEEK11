'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('todos', [
    {
   Title: 'naruto',
   createdAt: new Date(),
   updatedAt: new Date(),
   deletedAt: null
   },
   {
    Title: 'bleach',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      Title: 'dragon ball',
      createdAt: new Date(),
      updatedAt: new Date()     
    },
      {
        Title: 'blue lock',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          Title: 'doraemon',
          createdAt: new Date(),
          updatedAt: new Date()
          }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
