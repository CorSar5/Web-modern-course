const gate = 3003

const express = require('express')
const app = express()

app.get('/products', (req ,res, next) => {
    res.send({ name: 'Macbook', price: 2000.00}) // It will conver to JSON
})

app.listen(gate, ()=>{
    console.log(`Server executed in the gate ${gate}`)
})