const moduleA = require('../../01.MODULEA') //the caps error -> works on Windows, Mac but not in Linux
//const moduleA2 = require('C:\Users\Gamer\Desktop\exercícios-js\07.Node\01.moduleA.js') //copying Path
console.log(moduleA.hi)

const greatings = require('greatings') // Will met the file index.js
console.log(greatings.hi)

const c = require('./03.FolderC')
console.log(c.hi2)

/*const http = require('http')
http.createServer((req, ans) =>{
    ans.write('Good Morning!')
    ans.end()
}).listen(8080)*/