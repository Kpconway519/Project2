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


//Require multer 
const multer = require('multer');
const upload = multer();

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

  
  app.post("/login", upload.array(), function(req, res) {
    //check to see if login worked
    Customer.findOne({ where : { username : req.body.username}}).then((dbPost) => {
      if(dbPost.password === req.body.password) {

        console.log(req.sessionId);
        req.session.authenticated = true;
        res.send(req.session.id);
      } else {
        res.send("Failure");
      }

    });


    //if login worked assign cookie

  });

  app.post("/signup", upload.array(), function(req, res)  {
    let username = req.body.username;
    let password = req.body.password;
    Customer.findOne({ where : { username : username }}).then((dbpost) => {
      console.log(dbpost)
      if(dbpost === null) {
        Customer.create({
          username : username,
          password : password
        }).then(dbPost => {
          //Sign up Success

          res.send("Made");
        });
      } else {
        //redirect with username exist
        res.send("Existing username");
      }
    });

  })




};