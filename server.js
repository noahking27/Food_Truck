var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./controllers/html_routes.js");
var apiRoutes = require("./controllers/api_routes.js");
var uploadRoutes = require("./controllers/upload_routes.js");
var app = express();
var PORT = process.env.PORT || 3030;
var db = require("./models");

app.use(express.static(path.join(__dirname + "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", htmlRoutes);

app.use("/api/", apiRoutes);

app.use("/upload/", uploadRoutes);

db.sequelize.sync().then(function() {
	app.listen(PORT, console.log("Listening on port: " + PORT));
});