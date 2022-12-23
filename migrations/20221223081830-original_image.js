'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('original_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING
      },      
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      language_alias: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        }
      },         
      filename: {
        allowNull: false,
        type: Sequelize.STRING
      },  
      content: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      mime_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      width_px: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      height_px: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
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
    
    await queryInterface.dropTable('original_images');
  }
};
