const express = require('express')
const app = express()
const port = 3000

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

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://192.168.0.8:${port}`)
})