const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Locales', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        language_alias: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'languages',
                key: 'id'
            }
        },
        entity: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        entity_key: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        key: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'locales',
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
                name: "language_alias",
                using: "BTREE",
                fields: [
                    { name: "language_alias" },
                ]
            },
        ]
    });
};
