const express = require('express');
const exphbs = require('express-handlebars');

const app = express();



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