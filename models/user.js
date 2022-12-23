const Sequelize = require('sequelize');

const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    
    const User = sequelize.define('User', {

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
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: "email"
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'users',
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
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            },
        ]
    });

    useBcrypt(User);

    return User;

};