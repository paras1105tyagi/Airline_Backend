'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      userid: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull:false,
        type: Sequelize.ENUM,
        values: ['InProcess', 'Booked', 'Cancelled'],
        defaultValue: 'InProcess'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};