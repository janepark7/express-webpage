const express = require("express");
const app = express();
// const countries = require("./json/countries.json");
// console.log(countries);

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
//	Jane Park Webpage Template

//change the app.get and create a function

// app.get("/countries", function(req, res) {
// 	var country = countries.GBR;
// 	console.log(country);
// 	res.render("countries.ejs", country);
// });

app.get("/", function(req, res) {
	res.render("template", {
		page: "janepark",
		imagegallery: "imagegallery",
		// countries: "countries",
	});
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
