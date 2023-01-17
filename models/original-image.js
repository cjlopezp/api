const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('OriginalImage', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
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
            type: DataTypes.INTEGER,
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
        mime_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        width_px: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        height_px: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'original_images',
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
