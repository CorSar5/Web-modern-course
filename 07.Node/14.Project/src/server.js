const gate = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./dataBase')

app.use(bodyParser.urlencoded({extended: true})) //Very important line

app.get('/products', (req ,res, next) => {
    res.send(database.getProducts()) 
})

app.get('/products', (req, res, next)=>{
    res.send(database.getProduct(req.params.id))
})

app.post('/products/', (req,res,next)=>{
    const product = database.SaveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req,res,next)=>{
    const product = database.SaveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.delete('/products/:id', (req,res,next)=>{
    const product = database.delProducts(req.params.id)
    res.send(product) //JSON
})

app.listen(gate, ()=>{
    console.log(`Server executed in the gate ${gate}`)
})