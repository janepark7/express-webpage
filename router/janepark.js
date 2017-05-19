const express = require("express");
const router = express.Router();

router.get("/imagegallery", function (req, res){
	res.render("template", {
		page: "imagegallery",
		data: null,
	});
});

router.get("/", function(req, res){
	res.render("template", {
		page: "janepark",
		data: null,
	});
});


module.exports = router;
