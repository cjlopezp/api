'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('cart_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cart_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carts',
          key: 'id',          
        }
      },  
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',          
        }
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 2)
      },
      unit_measurement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
      tax_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'taxes',
          key: 'id'
        }
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
    
    await queryInterface.dropTable('cart_details');
  }
};
