'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
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
      reference: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      total_price_base: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      total_price_tax: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      emission_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      emission_hour: {
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
   
    await queryInterface.dropTable('payments');
  }
};
