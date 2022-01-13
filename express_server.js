const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static'));

app.listen(port, "192.168.0.8", () => {
    console.log(`Example app listening at http://192.168.0.8:${port}`)
})