const fs = require('fs')
const path = require('path')

function readArchives(way){
    return new Promise(resolve => {
        fs.readFile(way, function(_, content){
            resolve(content.toString())
        })
    })
}

const way = path.join(__dirname, 'data.txt')
readArchives(way)
    .then(content=> content.split('\n'))
    .then(lines => lines.join(','))
    .then(content => `The final value is : ${content}`)
    .then(console.log)