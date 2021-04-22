const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('archive')

app.post('/upload', (req, res) => {
    upload(req, res, err=>{
        if(err){
            return res.end('An error has occorred.')
        }

        res.send('Finished with success.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res)=>{
        // req.body
        // req.query(in this case /:className/12)
        // req.params(here if we had a class in the url we would only nedd /12)
        const par = parseInt(req.query.numero) % 2 === 0
        res.send({  
            result: par ? 'par' : 'impar'
        })
})

app.listen(8082, () => console.log("executing..."))