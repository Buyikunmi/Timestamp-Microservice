var express = require("express");
var router = express.Router();
// var timestamp = require('timestamp');
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/timestamp/:date", (req, res, next) => {
  let x = req.params.date;
  let date = x == +x ? new Date(+x) : new Date(x);
  let unix = date.getTime();
  let utc = date.toUTCString();

  !unix ? res.json({ error: "invalid date" }) : res.json({ unix, utc });
});

module.exports = router;
