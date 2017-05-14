const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));
/*
app.get("/", function(req, res) {
	console.log("Serving up homepage...");
	res.render("homepage");
});

app.get("/gallery", function(req, res) {
	console.log("This empty gallery");
	res.render("gallery");
});

app.get("/link", function(req, res) {
	console.log("Page O Links");
	res.render("links");
});
*/
//	Jane Park Webpage

app.get("/janepark", function(req, res) {
	console.log("Jane Park Homepage");
	res.render("janepark");
});



app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
