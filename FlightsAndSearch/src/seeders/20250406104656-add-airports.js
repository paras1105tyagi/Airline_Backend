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


    await queryInterface.bulkInsert('Airports',[
{
name: 'Kempegowda International Airport',

cityId: 9 ,
createdAt: new Date(),
updatedAt: new Date(),
},{
  name: 'Bhaiji International Airport',

  cityId: 1 ,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Paras International Airport',

  cityId: 9 ,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Tyagi International Airport',

  cityId: 8 ,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Mera International Airport',

  cityId: 4 ,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Uska International Airport',

  cityId: 4 ,
  createdAt: new Date(),
  updatedAt: new Date(),
},
    ],{});
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
