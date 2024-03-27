const { Get } = require("../controllers/company");
const express = require("express");
const router = express.Router();

router.route("/company").get(Get);

module.exports = router;
