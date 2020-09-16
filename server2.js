// Server.js - This file is the initial starting point for the Node/Express server.

// *** Dependencies

var express = require("express");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      
      lowercase: function(name) {
        // performs string operation lowercase
        // Usage: {{lowercase "Text"}}
        return name.toLowerCase().replace(/\s/g, "-");
      },
      stringify: function(data) {
        // Use this tool to output JSON
        return JSON.stringify(data);
      }
    }
  })
);
app.set("view engine", "handlebars");

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync().then(function() {

// launch ======================================================================

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});