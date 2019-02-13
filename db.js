//create connection to postgres db

var Sequelize = require('sequelize');

module.exports = new Sequelize('Peter', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});