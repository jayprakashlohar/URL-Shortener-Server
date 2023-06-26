
const express = require("express");
const urlRoute = express.Router();
const {
  handleGabrateUrl,
  handleRedirectUrl,
} = require("../controllers/url.controller");

urlRoute.post("/url", handleGabrateUrl);

urlRoute.get("/:shortId", handleRedirectUrl);

module.exports = { urlRoute };
