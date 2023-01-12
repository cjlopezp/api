'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      mesagge: {
        type: Sequelize.STRING,
        allowNull: false,
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
        allowNull: true,
        type: Sequelize.DATE
      }
    });
    


  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('contacts');
  }
};
