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

    // NOT DONE YET

  app.post("/customer/new", function (req, res) {

    var customer = req.body

    Customer.create({
      first_name: customer.firstName,
      last_name: customer.lastName,
      location: customer.location
    });

        // NOT DONE YET

  app.post("/service/new", function (req, res) {

    var service = req.body

    Service.create({
      service: service.service,
      description: service.description,
      price: service.price,
      duration: service.duration
    });


        //Don't really know what the question mark is all about here. I took this from the star wars thing.

        // app.get("/barber/:name?", async function(req, res) {
        //   if (req.params.characters) {
        //     // Display the JSON for ONLY that character.
        //     // (Note how we're using the ORM here to run our searches)
        //     let result = await Character.findOne({
        //                   where: {routeName: req.params.characters}})
        //       let credentials = await credentials.find(result)
        //       let certification = await AMA.find(credentials)
        //   } else {
        //     let result = await Character.findAll()
        //                   return res.json(result);
        //   }
        // });

        res.status(204).end();
      });
    };
