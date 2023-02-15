const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Book', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        pageCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        publishedDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'books',
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
