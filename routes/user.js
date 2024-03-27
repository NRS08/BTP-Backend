const { Get } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.route("/user").get(Get);

module.exports = router;
