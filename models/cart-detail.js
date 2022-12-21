const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CartDetail', {
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
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
        },
        unit_measurement: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tax_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'taxes',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'cart_details',
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
                name: "product_id",
                using: "BTREE",
                fields: [
                    { name: "product_id" },
                ]
            },
            {
                name: "tax_id",
                using: "BTREE",
                fields: [
                    { name: "tax_id" },
                ]
            },
        ]
    });
};
