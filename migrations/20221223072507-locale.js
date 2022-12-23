'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('locales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      language_alias: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        }
      }, 
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
     
      entity_key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      value: {
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
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('locales');
  }
};
