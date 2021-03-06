var express = require("express");
var path = require("path");

var port = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require in the routes from the route folder
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(port, function() {
    console.log(`Listening on the coolest port right here: ${port}`);
});