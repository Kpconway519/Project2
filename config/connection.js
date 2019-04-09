var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
let sequelize;

if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL)
} else{
  sequelize = new Sequelize("barberoo", "root", process.env.password, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
  
module.exports = sequelize;