const db = require("../config/db");

const saveSearch = (weather) => {

    const sql = `
        INSERT INTO search_history
        (city, temperature, humidity, wind_speed, weather_condition)
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
        weather.location.name,
        weather.current.temp_c,
        weather.current.humidity,
        weather.current.wind_kph,
        weather.current.condition.text
    ];

    db.query(sql, values);
};

const getHistory = () => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM search_history
            ORDER BY searched_at DESC
            LIMIT 10
        `;

        db.query(sql, (err, results) => {

            if (err) {
                reject(err);
            } else {
                resolve(results);
            }

        });

    });
};

module.exports = {
    saveSearch,
    getHistory
};