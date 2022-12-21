'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('failed_sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payment_methods',
          key: 'id',          
        }
      },  
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',          
        }
      },
      cart_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carts',
          key: 'id',          
        }
      },
      error_code: {
        type: Sequelize.INTEGER,       
      },
      error_message: {
        type: Sequelize.STRING,       
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
    
    await queryInterface.dropTable('failed_sales');
  }
};
