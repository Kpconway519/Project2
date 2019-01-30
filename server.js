const dotenv = require("dotenv")
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");



require("dotenv").config();

var PORT = 9002;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));



// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
//Authentication
app.use(session({
  secret: 'MVOETOCONFIG',
  resave: false,
  saveUninitialized: false,
  // store: sessionStore
}))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

//kevin conway's route
var apiRoutes = require("./controllers/api-routes.js");

//login middleware


apiRoutes(app);

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});










