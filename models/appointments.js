var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates an appointments table and defines
var Appointments = sequelize.define("appts", {
  accepted: Sequelize.BOOLEAN,
  comments: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
  barber_id: Sequelize.INTEGER,
  time: Sequelize.STRING,
  location: Sequelize.STRING,
  cost: Sequelize.INTEGER,
  service_1: Sequelize.INTEGER,
  service_2: Sequelize.INTEGER,
  service_3: Sequelize.INTEGER,
  paid: Sequelize.BOOLEAN,
  completed: Sequelize.BOOLEAN},{
    tableName: 'appts'
});

// Syncs with DB
Appointments.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Appointments;