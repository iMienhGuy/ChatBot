//create a model for chat datatable

var Sequelize = require('sequelize');
var db = require("../db"); 

 var Chat = db.define('Chat', {
  Log: {
    type: Sequelize.STRING
  },
  Name: {
    type: Sequelize.STRING
  }
});

module.exports= Chat;