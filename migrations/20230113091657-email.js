'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('emails');

  }
};
