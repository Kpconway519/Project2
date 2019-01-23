var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Customer = sequelize.define("customers", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  location: Sequelize.STRING,
  gender: Sequelize.STRING,
  ethnicity: Sequelize.STRING,
  fav_1: Sequelize.INTEGER,
  fav_2: Sequelize.INTEGER,
  fav_3: Sequelize.INTEGER
});

Customer.sync();

module.exports = Customer;


