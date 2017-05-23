const express = require("express");
const router = express.Router();
const countries = require("../json/countries.json");
//	console.log(countries);

// ---> /countries/:code
router.get("/:code", function(req, res) {
	var country = countries[req.params.code];

	if (!country) {
		res.status(400);
		return res.send("This is not a country!");
	}
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});

	res.render("/page/countries.ejs");
});

module.exports = router;
