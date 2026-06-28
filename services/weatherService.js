const axios = require("axios");

const getWeather = async (city) => {
    const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`
    );

    return response.data;
};

module.exports = {
    getWeather
};