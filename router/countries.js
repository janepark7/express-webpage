const express = require("express");
const router = express.Router();
const countries = require("../json/countries.json");
//	console.log(countries);

// ---> /countries/:code
router.get("/:code", function(req, res) {
	var country = countries[req.params.code];
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});
	if (!country) {
		res.status(404);
		return res.send("This is not a country");
	}

//	Otherwise, render the admin....
	res.render("admin");
});

module.exports = router;
