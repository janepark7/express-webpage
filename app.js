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
//	Jane Park Webpage Template

app.get("/", function(req, res) {
	res.render("template", {
		page: "janepark",
		imagegallery: "http://localhost:3000/imagegallery",
		github: "http://www.github.com/janepark7",
		linkedin:"https://www.linkedin.com/in/jane-park-7aa208132/",
	});
});

app.get("/imagegallery", function(req, res) {
	res.render("imagegallery.ejs");
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
