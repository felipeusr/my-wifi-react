const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const wifiPassword = require('wifi-password');

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended : true }));

app.get("/wify", (req, res) => {
    wifiPassword().then(password => {
        res.json([{passwd : password}]);
    });
});

app.listen(3001, () => {
    console.info("Server running in 3001 port!");
});