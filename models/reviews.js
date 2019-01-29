var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Review = sequelize.define("reviews", {
  comments: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
  barber_id: Sequelize.INTEGER,
  rating: Sequelize.INTEGER
});

Review.sync();

module.exports = Review;

