const express = require('express')
const app = express()   

app.get('/sup',(req, res) => {
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
    
    /*res.json([
        {id:7, name:'Peter', position:1},
        {id:5, name:'Marie', position:2},
        {id:2, name:'Steven', position:3}
    ])*/
    
    /*res.json({
        name: "Mac 1TB",
        price: 3000.99,
        discount: 0.05
    })*/


    //res.send("<h1>I'm</h1> <b>fine<b>!")
})

app.listen(3000, ()=>{
    console.log('Backend Executing ...')
})