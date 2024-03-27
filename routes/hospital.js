const { Get } = require("../controllers//hospital");
const express = require("express");
const router = express.Router();

router.route("/hospital").get(Get);

module.exports = router;
