var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/timestamp/:date", (req, res, next) => {
  res.json({ Data: req.params });
});

module.exports = router;
