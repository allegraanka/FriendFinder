var express = require("express");
var path = require("path");

<<<<<<< HEAD
var port = process.env.PORT || 3100;
=======
var port = 5111;
>>>>>>> 4b540385174ba92ce74c5f839dcd8a62d7e2ccdc
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