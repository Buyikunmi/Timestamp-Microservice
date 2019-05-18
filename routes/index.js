var express = require("express");
var router = express.Router();

function sendDateJSON(date, res) {
  let unix = date.getTime();
  let utc = date.toUTCString();
  !unix ? res.json({ error: "invalid date" }) : res.json({ unix, utc });
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Timestamp API" });
  next();
});

router.get("/api/timestamp/:date", (req, res, next) => {
  let x = req.params.date || new Date();
  let date = x == +x ? new Date(+x) : new Date(x);
  sendDateJSON(date, res);
});
router.get("/api/timestamp", (req, res, next) => {
  let date = new Date();
  sendDateJSON(date, res);
});

module.exports = router;
