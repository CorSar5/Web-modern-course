const fs = require('fs')

const way = __dirname + '/11.Archive.json'

//synchronous...
const content = fs.readFileSync(way, 'utf-8') //fs means file system
console.log(content)

//asynchronous...
fs.readFile(way, 'utf-8',(err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./11.Archive.json')
console.log(config.db) //this one will appear first

fs.readdir(__dirname, (err, archives)=>{ //dirname means the actual folder
    console.log('Folders content...')
    console.log(archives)
})