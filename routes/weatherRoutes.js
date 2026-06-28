const express = require("express");
const router = express.Router();

const weatherController = require("../controllers/weatherController");

router.get("/", weatherController.showHomePage);

router.post("/weather", weatherController.searchWeather);

module.exports = router;