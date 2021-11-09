const { Sequelize } = require('sequelize')
require("dotenv").config();

// const {DATABASE, DB_HOST, USER, PASSWORD} = process.env
const DATABASE = 'ddf4l2g9vj9c0e';
const USER = 'mwpecwrxshhzty';
const PASSWORD = '9f23b24b0fb781efb0f65bb6682416c9434c9b2cb76c496ddd8875f49475438c';
const DB_HOST = 'ec2-52-201-168-60.compute-1.amazonaws.com';

const sequelize = new Sequelize(
  DATABASE,
  USER,
  PASSWORD,
  {
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;