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
    await queryInterface.bulkInsert('airplanes', [{
       modelNumber: 'Airbus A320',
       capacity: 300,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
    
     {
      modelNumber: 'Boeing 737',
      capacity: 390,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'Boeing 777',
      capacity: 350,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
    {
      modelNumber: 'Boeing 777',
      capacity: 330,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
    {
      modelNumber: 'Airbus A330',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
    
    
    
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

// command to create seed file: npx sequelize-cli seed:generate --name addd-airplanes
