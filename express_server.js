const express = require('express');
const app = express();
const port = 3000;
const https = require("https");
const bodyParser = require("body-parser");

app.use(express.static('static'));

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/static/contact.html")
})

app.get('/credentials', function(req, res) {
    res.sendFile(__dirname + "/static/credentials.html")
})

app.get('/work_experience', function(req, res) {
    res.sendFile(__dirname + "/static/work_experience.html")
})

app.get('/projects', function(req, res) {
    res.sendFile(__dirname + "/static/projects.html")
})

app.post("/weather", (req, res) => {
    console.log("Posted!");
    // var city = req.body.cityName;
    var city = "tampa";
    var appID = "c67d9619ac3623d6d25f6109b02ef896";
    var units = "imperial";
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${units}`
    https.get(weather_url, (response) => {
        respCode = response.statusCode
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const iconID = weatherData.weather[0].icon
            res.write(`{"image_url": "http://openweathermap.org/img/wn/${iconID}@2x.png","temp":"${temp}","weather":"${weatherDescription}"}`)
            res.send()
        });
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at ${port}`)
})