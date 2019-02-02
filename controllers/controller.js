const express = require("express");
var Appointment = require("../models/appointments.js");
var Barber = require("../models/barber.js");
var Customer = require("../models/customer.js");
var Review = require("../models/reviews.js");
var Service = require("../models/services.js")
var router = express.Router();

//middleware
function authenticate(req, res, next) {
    console.log(req.cookie)
    //uncomment lines 13-17 and comment lines 18 for login to work
    // if (!req.session.authenticated) {
    // res.redirect('/');
    // } else {
    // next();
    // }  
      next();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                              //
  //                            HERE IS WHERE ALL THE ROUTES GO                                   //
 //                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

            //                  MAIN PAGE

            router.get("/", function(req, res) {
                res.render("start.handlebars");
            });
    
  //////////////////////////////////////////////////////////////////////////////////////////////////
 //                             ORDER FLOW                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////
            
            //                  CUSTOMER LOGIN
            router.get("/customer/login", function(req, res) {
                res.render("login.handlebars", { "type" : "customer" })
            })
            
            //                  BARBER LOGIN
            router.get("/barber/login", function(req, res) {
                res.render("login.handlebars", { "type" : "barber"})
            })

            //                  ORDER PAGE
            router.get("/order", authenticate, function(req, res) {
                Service.findAll({})
                .then(function(data) {
                    let ordObject = {
                        services: data
                    };                    
                    res.render("order.handlebars", ordObject);
                });
            });

            //                  BARBER PAGE
            router.get("/barber", authenticate, function(req, res) {

                Barber.findAll({})
                .then(function(data) {
                    let barbObject = {
                        barbers: data
                    };
                    res.render("barber.handlebars" , barbObject);
                });
            })

            //                  CONFIRMATION SCREEN
            router.get("/confirm", authenticate, function(req, res) {
                Appointment.findAll({where: {session: req.session.id}})
                .then(function(data) {
                    console.log(data)
                    let completedAppt = {
                        appointment: data
                    };                    
                    res.render("confirm.handlebars", completedAppt);
                });
            })

            //                  APPOINTMENT SCREEN
            router.get("/appointment", authenticate, function(req, res) {
                res.render("appointment.handlebars")
            })

  //////////////////////////////////////////////////////////////////////////////////////////////////
 //                              END OF ORDER FLOW                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////////////////////////
 //                              ABOUT PAGES FROM THE NAVBAR                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////

            //                   ABOUT PAGE
            router.get("/about", authenticate, function(req, res) {
                res.render("about.handlebars")
            })

            //                   ALLBARBERS PAGE
            router.get("/allbarbers", authenticate, function(req, res) {
                //this is gonna be a dynamic thing which adds in all the barbers from the database
                Barber.findAll({})
                .then(function(data) {
                    let barbObject = {
                        barbers: data
                    };
                    res.render("allbarbers.handlebars" , barbObject);
                });
            })

            //                   ALLREVIEWS PAGE
            router.get("/allreviews", authenticate, function(req, res) {
                //this is gonna be a dynamic thing which adds in all the reviews from the database
                res.render("allreviews.handlebars" /*, {  INSERT HANDLEBARS STUFF HERE  } */)
            })

  //////////////////////////////////////////////////////////////////////////////////////////////////
 //                              END OF ABOUT PAGES                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////////////////////////
 //                              ADMIN PAGES                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////

            //                   ADMIN PAGE
            router.get("/admin", function(req, res) {
                res.render("admin.handlebars")
            })

    //////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                              //
  //                              END OF ADMIN PAGE                                               //
 //                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                              //
  //                              END OF ROUTES                                                   //
 //                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;

