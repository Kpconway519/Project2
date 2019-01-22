const express = require("express");
var Appointment = require("../models/appointments.js");
var Barber = require("../models/barber.js");
var Customer = require("../models/customer.js");
var Review = require("../models/reviews.js");

var router = express.Router();


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
//                              ORDER FLOW                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////


            //                  ORDER PAGE
            router.get("/order", function(req, res) {
                res.render("order.handlebars");
            });
            //                  BARBER PAGE
            router.get("/barber", function(req, res) {
                res.render("barber.handlebars");
            })
            //                  CONFIRMATION SCREEN
            router.get("/confirm", function(req, res) {
                res.render("confirm.handlebars")
            })

//////////////////////////////////////////////////////////////////////////////////////////////////
//                              END OF ORDER FLOW                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
//                              ABOUT PAGES FROM THE NAVBAR                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////


            router.get("/about", function(req, res) {
                res.render("about.handlebars")
            })

            router.get("/allbarbers", function(req, res) {
                //this is gonna be a dynamic thing which adds in all the barbers from the database
                res.render("allbarbers.handlebars" /*,  {  INSERT HANDLEBARS STUFF HERE  }*/)
            })

            router.get("/allreviews", function(req, res) {
                //this is gonna be a dynamic thing which adds in all the reviews from the database
                res.render("allreviews.handlebars" /*, {  INSERT HANDLEBARS STUFF HERE  } */)
            })

//////////////////////////////////////////////////////////////////////////////////////////////////
//                              END OF ABOUT PAGES                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
//                                   ADMIN PAGE                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////

            router.get("/admin", function(req, res) {
                res.render("admin.handlebars")
            })

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//                                   END OF ADMIN PAGE                                          //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//                                      END OF ROUTES                                           //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = router;