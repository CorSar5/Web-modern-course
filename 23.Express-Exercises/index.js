const express = require('express')
const app = express()   
const bodyParser = require('body-parser')

const salute = require('./saluteMid')
const userAPI = require('./api/user')
require('./api/product')(app, 'with param!')

/* const productAPI = require('./api/product')
productAPI(app, 'with param!')*/

app.post('/user',userAPI.save)
app.get('/user', userAPI.obtain)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(salute('Mike'))

app.use('/sup',(req, res, next) => {
    console.log('Before...')
    next()
})

app.get('/client/resume', (req, res)=>{
    res.send(`Client resume: complete = ${req.query.complete} year = ${req.query.year}`) 
    //Query is given in the url
})

app.post('/body', (req, res) => {
    /*let body= ''
    req.on('data', function(part){
        body += part
    })

    req.on('end', function() {
        res.send(body)
    })*/
    res.send(req.body)
})

app.get('/client/:id', (req, res,next) =>{
    res.send(`Client ${req.params.id} selected!`)
    next()
})


app.get('/sup',(req, res, next) => {
    console.log('while')
    res.json({
        data: [
            {id:7, name:'Peter', position:1},
            {id:5, name:'Marie', position:2},
            {id:2, name:'Steven', position:3}
        ],
        count:30,
        skip:0,
        limit:3,
        status:200
    })
    next()

    /*res.json([
        {id:7, name:'Peter', position:1},{id:5, name:'Marie', position:2},{id:2, name:'Steven', position:3}
    ])*/
    
    /*res.json({
        name: "Mac 1TB", price: 3000.99, discount: 0.05
    })*/

    //res.send("<h1>I'm</h1> <b>fine<b>!")
})

app.use('/sup',(req, res, next) => {
    console.log('After...')
    next()
})

app.listen(3000, ()=>{
    console.log('Backend Executing ...')
})