const{DataTypes} = require("sequelize")
const connection = require("../database/sequel.js")

const users = connection.define("videos", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    videoTitle:{
        type: DataTypes.STRING(255)
    },
    videoLink:{
        type: DataTypes.STRING(255)
    },
    videoThumbnail:{
        type: DataTypes.STRING(255)
    }
})

users.sync({alter: true});

module.exports = videos