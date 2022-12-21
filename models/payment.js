const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Payment', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        sale_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'sales',
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
        reference: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        total_price_base: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        total_price_tax: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        emission_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        emission_hour: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'payments',
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
                name: "sale_id",
                using: "BTREE",
                fields: [
                    { name: "sale_id" },
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
