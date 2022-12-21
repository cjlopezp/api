'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('sales', {
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
          key: 'id'
        }
      }, 
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id'
        }
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payment_methods',
          key: 'id'
        }
      },
      total_price: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 2)
      },
      full_base_price: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 2)
      },
      full_tax_price: {
        allowNull: false,
        type: Sequelize.FLOAT(10, 2)
      },
      date_issue: {
        allowNull: false,
        type: Sequelize.DATE      
      },
      hour_issue: {
        allowNull: false,
        type: Sequelize.TIME      
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
    
    await queryInterface.dropTable('sales');
  }
};
