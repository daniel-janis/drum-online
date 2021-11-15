const{DataTypes} = require("sequelize")
const connection = require("../database/sequel.js")

const users = connection.define("users", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING(30)
    },
    password:{
        type: DataTypes.STRING(255)
    },
    email:{
        type: DataTypes.STRING(75)
    },
    first_name:{
        type: DataTypes.STRING(30)
    },
    last_name:{
        type: DataTypes.STRING(50)
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: true
    },
})

users.sync({alter: true});

module.exports = users