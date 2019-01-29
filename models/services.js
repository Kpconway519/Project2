var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a Service model that matches up with DB
var Service = sequelize.define("services", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  duration: Sequelize.STRING
});

// Syncs with DB
Service.sync();

module.exports = Service;
