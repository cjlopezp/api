const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ResizedImage', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        image_original_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        image_configuration_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        alt: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        entity: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        entity_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        language_alias: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'languages',
                key: 'id'
            }
        },
        filename: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mime_typecontent: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        grid: {
            type: DataTypes.ENUM('desktop','mobile','preview','any'),
            allowNull: false
        },
        size_bytes: {
            type: DataTypes.INTEGER,
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
        tableName: 'resized_images',
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
