CREATE DATABASE IF NOT EXISTS weather_app;

USE weather_app;

CREATE TABLE IF NOT EXISTS search_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    temperature FLOAT NOT NULL,
    humidity INT NOT NULL,
    wind_speed FLOAT NOT NULL,
    weather_condition VARCHAR(100) NOT NULL,
    searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);