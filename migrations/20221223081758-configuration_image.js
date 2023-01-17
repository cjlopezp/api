'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('configuration_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      directory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grid: {
        allowNull: false,
        type: Sequelize.ENUM(['desktop', 'mobile', 'thumbnail'])
      },
      content_accepted: {
        allowNull: false,
        type: Sequelize.STRING
      },
      extension_conversion: {
        allowNull: false,
        type: Sequelize.STRING
      },

      width_px: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      height_px: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      quality: {
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
    
    await queryInterface.dropTable('configuration_images');
  }
};
