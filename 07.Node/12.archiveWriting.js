const fs = require('fs')

const product = {
    name: 'Smartphone',
    price:900.00,
    discount: 0.15
}

fs.writeFile(__dirname +'/12.GeneratedArchive.json', JSON.stringify(product), err=>{
    console.log(err || 'Saved Archive!' )
})