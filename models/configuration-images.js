const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConfigurationImages', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        entity: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        directory: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        grid: {
            type: DataTypes.ENUM('desktop','mobile','preview','any'),
            allowNull: false
        },
        content_aceepted: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        extension_conversion: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        width_px: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        height_px: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        quality: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'configuration_images',
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
