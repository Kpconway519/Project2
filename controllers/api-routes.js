// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================
var Appointment = require("../models/appointments.js");
var Review = require("../models/reviews.js");
var Barber = require("../models/barber.js");
var Customer = require("../models/customer.js");
var Service = require("../models/services.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Character (or all characters) then provides JSON

  // If a user sends data to add a new character...
  app.post("/barber/new", function (req, res) {

    var barber = req.body

    Barber.create({
      first_name: barber.firstName,
      last_name: barber.lastName,
      location: barber.location
    });
    res.status(204).end();

  });

  app.post("/customer/new", function (req, res) {

    var customer = req.body

    Customer.create({
      first_name: customer.firstName,
      last_name: customer.lastName,
      location: customer.location
    });
    res.status(204).end();

  });

  app.post("/service/new", function (req, res) {

    var service = req.body

    Service.create({
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration
    });
    res.status(204).end();

  });

  app.post("/login", function(req, res) {
    console.log(req.body);
    res.send(200);
  });

};
