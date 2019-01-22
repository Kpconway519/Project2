var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Customer = sequelize.define("customers", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  location: Sequelize.STRING
});

Customer.sync();

module.exports = Customer;


