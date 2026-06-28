const weatherService = require("../services/weatherService");
const weatherModel = require("../models/weatherModel");

const showHomePage = async (req, res) => {
    try {
        const history = await weatherModel.getHistory();

        res.render("index", {
            weather: null,
            history,
            error: null
        });
    } catch (error) {
        console.log(error);

        res.render("index", {
            weather: null,
            history: [],
            error: "Something went wrong."
        });
    }
};

const searchWeather = async (req, res) => {
    const city = req.body.city;

    try {
        const weather = await weatherService.getWeather(city);

        await weatherModel.saveSearch(weather);

        const history = await weatherModel.getHistory();

        res.render("index", {
            weather,
            history,
            error: null
        });

    } catch (error) {

        const history = await weatherModel.getHistory();

        res.render("index", {
            weather: null,
            history,
            error: "City not found."
        });
    }
};

module.exports = {
    showHomePage,
    searchWeather
};