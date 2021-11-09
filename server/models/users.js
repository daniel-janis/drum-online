const{DataTypes} = require("sequelize")
const connection = require("../database/sequel.js")

const users = connection.define("users", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    Username:{
        type: DataTypes.STRING(30)
    },
    Password:{
        type: DataTypes.STRING(255)
    },
    Email:{
        type: DataTypes.STRING(75)
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: true
    }
})

users.sync({alter: true});

module.exports = users