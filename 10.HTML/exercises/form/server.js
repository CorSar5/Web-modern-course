const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //this line is needed to run the line 8

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Congratulations!</h1>')
})

app.listen(3003)