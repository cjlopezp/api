const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FailedSales', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'payment_methods',
                key: 'id'
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clients',
                key: 'id'
            }
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'carts',
                key: 'id'
            }
        },
        error_code: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        error_message: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'failed_sales',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "payment_method_id",
                using: "BTREE",
                fields: [
                    { name: "payment_method_id" },
                ]
            },
            {
                name: "client_id",
                using: "BTREE",
                fields: [
                    { name: "client_id" },
                ]
            },
            {
                name: "cart_id",
                using: "BTREE",
                fields: [
                    { name: "cart_id" },
                ]
            },
        ]
    });
};
