var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a barber model that matches up with DB
var Barber = sequelize.define("barbers", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  location: Sequelize.STRING
});

// Syncs with DB
Barber.sync();

module.exports = Barber;
