const express = require("express");
const app = express();
const countries = require("./json/countries.json");
console.log(countries);

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

app.get("/", function(req, res) {
	res.render("template", {
		page: "janepark",
	});
});

app.get("/imagegallery", function(req, res) {
	res.render("template", {
		page: "page/imagegallery",
	});
});

//	incorporating countries onto template

app.get("/countries/:code", function(req, res) {
	var country = countries[req.params.code];
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});
	if (!country) {
		res.status(404);
		return res.send("This is not a country");
}
//Otherwise, render the admin....
res.render("admin");
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
