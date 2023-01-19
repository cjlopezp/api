'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('image_originals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageConfigurationId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originalFilename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      resizedFilename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      entityId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sizeBytes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mediaQuery: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      languageAlias: {
        allowNull: false,
        type: Sequelize.STRING
      },
      latency: {
        allowNull: false,
        type: Sequelize.INTEGER
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('image_originals');
  }
};
