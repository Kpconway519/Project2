var Barber = sequelize.define("barbers", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  location: Sequelize.STRING
});

var Customer = sequelize.define("customers", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  location: Sequelize.STRING
});