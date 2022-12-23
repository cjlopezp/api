'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('resized_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_original_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      image_configuration_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alt: {
        allowNull: false,
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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

      mime_typecontent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grid: {
        allowNull: false,
        type: Sequelize.ENUM(['desktop', 'mobile', 'preview', 'any'])
      },
      size_bytes: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('resized_images');
  }
};
