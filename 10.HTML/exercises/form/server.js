const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //this line is needed to run the line 8

app.post('/users', (req, resp) => {
    console.log(req.body)
    //console.log(req.query) in a get situation although it would show the password
    resp.send('<h1>Congratulations. User Included!</h1>')
})

app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Congratulations. User has been changed!</h1>')
})

app.listen(3003)