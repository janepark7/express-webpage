const express = require("express");
const router = express.Router();
const countries = require("../json/countries.json");
//	console.log(countries);

// ---> /countries/:code
router.get("/:code", function(req, res) {
	var country = countries[req.params.code.toUpperCase()];

	if (!country) {
		res.status(400);
		return res.send("This is not a country!");
	}
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});


});

//   ----> /countries
router.get('/', function (req,res) {
	var home = countries.USA;

	res.render("template", {
		page: "page/countries.ejs",
		data: home,
	});
});

module.exports = router;
