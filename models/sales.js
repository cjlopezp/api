const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Sales', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'carts',
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
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'payment_methods',
                key: 'id'
            }
        },
        total_price: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
        },
        full_base_price: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
        },
        full_tax_price: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
        },
        date_issue: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hour_issue: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'sales',
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
                name: "cart_id",
                using: "BTREE",
                fields: [
                    { name: "cart_id" },
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
                name: "payment_method_id",
                using: "BTREE",
                fields: [
                    { name: "payment_method_id" },
                ]
            },
        ]
    });
};
