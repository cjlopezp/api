const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Company', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mobile_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cif_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        opening_days: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        customer_service_days: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        visible: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'companies',
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
        ]
    });
};
