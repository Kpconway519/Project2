var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates an appointments table and defines
var Appts = sequelize.define("appts", {
  accepted: Sequelize.BOOLEAN,
  comments: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
  barber_id: Sequelize.INTEGER,
  time: Sequelize.STRING,
  location: Sequelize.STRING,
  cost: Sequelize.FLOAT,
  services: Sequelize.STRING,
  paid: Sequelize.BOOLEAN,
  completed: Sequelize.BOOLEAN
});

// Syncs with DB
Appts.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Appts;