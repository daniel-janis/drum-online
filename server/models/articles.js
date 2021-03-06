const{DataTypes} = require("sequelize")
const connection = require("../database/sequel.js")

const users = connection.define("articles", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    articleTitle:{
        type: DataTypes.STRING(255)
    },
    articleLink:{
        type: DataTypes.STRING(255)
    },
})

users.sync({alter: true});

module.exports = articles