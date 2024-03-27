const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const Get = async (req, res) => {
  res.status(201).json({ user: "Hospital Function" });
};

module.exports = { Get };
