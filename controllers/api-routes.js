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

//bcrypt
const bcrypt = require('bcryptjs');

// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Character (or all characters) then provides JSON



                          //////////////////////
                         // ADD a new barber //
                        //////////////////////

  app.post("/barber/new", function (req, res) {

    var barber = req.body

    Barber.create({
      first_name: barber.firstName,
      last_name: barber.lastName,
      location: barber.location
    });
    res.status(204).end();

  });

  //////////////////////
 //        END       //
//////////////////////


                          ////////////////////////
                         // ADD a new customer //
                        ////////////////////////

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

  //////////////////////
 //       END        //
//////////////////////


                          ////////////////////////
                         // POST a new service //
                        ////////////////////////

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

  //////////////////////
 //        END       //
//////////////////////


                          ////////////////////////////
                         // POST a new appointment //
                        ////////////////////////////




  app.post("/appointment/new", function (req, res) {
    console.log(req.session.id)
    var appointment = req.body;
    Appointment.create({
      accepted: appointment.accepted,
      comments: appointment.comments,
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

  //////////////////////
 //        END       //
//////////////////////


                          ////////////////////////////////////////////////////
                         // UPDATE a new barber to the created appointment //
                        ////////////////////////////////////////////////////

  app.put("/appointment/barber", function (req, res) {
    // THIS IS PART OF THE FUNCTION WHERE THE SESSION IS USED TO FIND THE CORRECT APPOINTMENT AND THE CORRECT BARBER IS THEN SET IN THAT APPOINTMENT ROW.
    // console.log(req)
    //find the appointment where session === the passed in session value and replace the column "barber" with the passed value.

    Appointment.update(
      { barber_id: req.body.barber },
      { where: { session: req.session.id } }
    ).then(function (rowsUpdated) {
      res.render("appointment.handlebars")
    })

  })

  //////////////////////
 //        END       //
//////////////////////


                          ///////////////////////////////////////////////////
                         // UPDATE the appointment with the selected time //
                        ///////////////////////////////////////////////////

  app.put("/appointment/time", function (req, res) {
    // THIS IS PART OF THE FUNCTION WHERE THE SESSION IS USED TO FIND THE CORRECT APPOINTMENT AND THE CORRECT BARBER IS THEN SET IN THAT APPOINTMENT ROW.

    Appointment.update(
      { time: req.body.time },
      { where: { session: req.session.id } }
    ).then(function (rowsUpdated) {

      res.render("confirm.handlebars")
    })

  })

  //////////////////////
 //        END       //
//////////////////////


                          //////////////////////////////
                         //     customer login       //
                        //////////////////////////////

  app.post("/customer/login", upload.array(), function (req, res) {
    //check to see if login worked
    console.log(req.body)
    Customer.findOne({ where: { username: req.body.username } }).then((dbPost) => {
      if(dbPost !== null) {
        bcrypt.compare(req.body.password, dbPost.password, function(err, loggedIn) {
          if(loggedIn) {
            console.log(req.sessionId);
            req.session.authenticated = true;
            res.redirect("/order"); 
           // Passwords match
          } else {
           // Passwords don't match
           res.render("login.handlebars", { "type" : "customer",
                                            "error" : "Error processing request try again" })
          } 
        });
      } else {
        res.render("login.handlebars", { "type" : "customer",
        "error" : "Error processing request try again" })
      }

    });
  });

  //////////////////////
 //        END       //
//////////////////////


                          ///////////////////////////////////////
                         //            barber login           //
                        ///////////////////////////////////////

  app.post("/barber/login", upload.array(), function (req, res) {
    //check to see if login worked
    Barber.findOne({ where: { username: req.body.username } }).then((dbPost) => {
      if(dbPost !== null) {
        bcrypt.compare(req.body.password, dbPost.password, function(err, loggedIn) {
          if(loggedIn) {
            console.log(req.sessionId);
            req.session.authenticated = true;
            res.send(req.session.id);
           // Passwords match
          } else {
           // Passwords don't match
           res.render("login.handlebars", { "type" : "barber",
           "error" : "Error processing request try again" })
          } //
        });
      } else {
        res.render("login.handlebars", { "type" : "barber",
        "error" : "Error processing request try again" })  
      }

    });
  });

  //////////////////////
 //        END       //
//////////////////////


                          ////////////////////////////////////////////////////
                         //              customer signup                   //
                        ////////////////////////////////////////////////////

  //Correctly use sequelize to force only one to exist and catch that error instead of findone first
  //Also don't forget to grab and store all information that is needed
  app.post("/customer/signup", upload.array(), function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let first_name = req.body.firstName;
    let last_name = req.body.lastName;
    let location = req.body.location;
    let gender = req.body.gender;
    let ethnicity = req.body.ethnicity;

    Customer.findOne({ where: { username: username } }).then((dbpost) => {
      console.log(dbpost)
      if (dbpost === null) {
        bcrypt.hash(password, 10, function(err, hash) {
          // Store hash in database
          Customer.create({
            username: username,
            password: hash,
            first_name: first_name,
            last_name: last_name,
            location: location,
            gender: gender,
            ethnicity: ethnicity
  
          }).then(dbPost => {
            //Sign up Success
  
            res.redirect("/order");
          });

        });

      } else {
        //redirect with username exist
        res.render("login.handlebars", { "type" : "customer",
                    "error" : "Username already exist" })
      }
    });

  })

  //////////////////////
 //        END       //
//////////////////////


                          ////////////////////////////////////////////////////
                         //               barber signup                    //
                        ////////////////////////////////////////////////////

  //Correctly use sequelize to force only one to exist and catch that error instead of findone first
  //Also don't forget to grab and store all information that is needed
  app.post("/barber/signup", upload.array(), function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    Barber.findOne({ where: { username: username } }).then((dbpost) => {
      console.log(dbpost)
      if (dbpost === null) {
        bcrypt.hash(password, 10, function(err, hash) {
          Barber.create({
            username: username,
            password: hash
          }).then(dbPost => {
            //Sign up Success
  
            res.redirect("/order");
          });
        });

      } else {
        //redirect with username exist
        res.render("login.handlebars", { "type" : "barber",
                    "error" : "Username already exist" })      }
    });

  })

  //////////////////////
 //        END       //
//////////////////////


}; //end of module.exports