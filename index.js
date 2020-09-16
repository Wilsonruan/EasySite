const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

const PORT = process.env.PORT || 8080;
const db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
    res.render("login");
    });


app.get('/', (req, res) => {
    res.render('signup');
    });

app.get('/', (req, res) => {
    res.render("members");
}); 

db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
});
});