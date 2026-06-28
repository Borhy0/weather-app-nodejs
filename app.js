require("dotenv").config();

require("./config/db");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");


app.set("views", "./views");


const weatherRoutes = require("./routes/weatherRoutes");


app.use("/", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});