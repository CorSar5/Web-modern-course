const express = require('express')
const app = express()   

app.all('/sup',(req, res) => {
    res.send("I'm <b>fine<b>!")
})

app.listen(3000, ()=>{
    console.log('Backend Executing ...')
})