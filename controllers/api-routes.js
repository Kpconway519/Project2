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
      first_name: customer.first_name,
      last_name: customer.last_name,
      location: customer.location,
      username: customer.username,
      password: customer.password,
      session_id: customer.session_id,
      gender: customer.gender,
      ethnicity: customer.ethnicity,
      fav_1: customer.fav_1,
      fav_2: customer.fav_2,
      fav_3: customer.fav_3
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

  app.post("/appointment/new", function (req, res) {
    console.log(req.session.id)
    var appointment = req.body;
    Appointment.create({
      accepted: appointment.accepted,
      comments: appointment.comments,
      // CHRIS, I'M PUTTING THE SESSION ID HERE
      session: req.session.id,
      customer_id: appointment.customer_id,
      barber_id: appointment.barber_id,
      duration: appointment.time,
      location: appointment.location,
      cost: appointment.cost,
      service_1: appointment.service_1,
      service_2: appointment.service_2,
      service_3: appointment.service_3,
      paid: appointment.paid,
      completed: appointment.completed

    });
    
    res.render("barber.handlebars")

  });

  app.put("/appointment/barber", function (req, res) {
    // THIS IS PART OF THE FUNCTION WHERE THE SESSION IS USED TO FIND THE CORRECT APPOINTMENT AND THE CORRECT BARBER IS THEN SET IN THAT APPOINTMENT ROW.
      // console.log(req)
    //find the appointment where session === the passed in session value and replace the column "barber" with the passed value.

    Appointment.update(
        {barber_id: req.body.barber},
        {where: {session: req.session.id}}
      ).then(function(rowsUpdated) {
        res.render("appointment.handlebars")
      })

  })
    
    
  app.put("/appointment/time", function (req, res) {
    // THIS IS PART OF THE FUNCTION WHERE THE SESSION IS USED TO FIND THE CORRECT APPOINTMENT AND THE CORRECT BARBER IS THEN SET IN THAT APPOINTMENT ROW.

      Appointment.update(
        {time: req.body.time},
        {where: {session: req.session.id}}
      ).then(function(rowsUpdated) {
        res.render("confirm.handlebars")
      })

  })  
    


    app.post("/customer/login", upload.array(), function (req, res) {
      //check to see if login worked
      Customer.findOne({ where: { username: req.body.username } }).then((dbPost) => {
        if (dbPost.password === req.body.password) {

          console.log(req.sessionId);
          req.session.authenticated = true;
          res.send(req.session.id);
        } else {
          res.send("Failure");
        }
      });
    });

    app.post("/barber/login", upload.array(), function (req, res) {
      //check to see if login worked
      Barber.findOne({ where: { username: req.body.username } }).then((dbPost) => {
        if (dbPost.password === req.body.password) {
          req.session.authenticated = true;
          res.send(req.session.id);
        } else {
          res.send("Failure");
        }
      });
    });

    //Correctly use sequelize to force only one to exist and catch that error instead of findone first
    //Also don't forget to grab and store all information that is needed
    app.post("/customer/signup", upload.array(), function (req, res) {
      let username = req.body.username;
      let password = req.body.password;
      Customer.findOne({ where: { username: username } }).then((dbpost) => {
        console.log(dbpost)
        if (dbpost === null) {
          Customer.create({
            username: username,
            password: password
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
    //Correctly use sequelize to force only one to exist and catch that error instead of findone first
    //Also don't forget to grab and store all information that is needed
    app.post("/barber/signup", upload.array(), function (req, res) {
      let username = req.body.username;
      let password = req.body.password;
      Barber.findOne({ where: { username: username } }).then((dbpost) => {
        console.log(dbpost)
        if (dbpost === null) {
          Barber.create({
            username: username,
            password: password
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

}; //end of module.exports