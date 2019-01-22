// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================
var Appointment = require("../models/appointments.js");
var Review = require("../models/reviews.js");
var Barber = require("../models/barber.js");
var Customer = require("../models/customer.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  
  // If a user sends data to add a new character...
  app.post("/barber/new", function(req, res) {

    var barber = req.body

    Barber.create({
        first_name: barber.firstName,
        last_name: barber.lastName,
        location: barber.location
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
