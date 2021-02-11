const moduleA = require('./01.moduleA.js')
const moduleB = require('./01.moduleB') //.js is not required 

console.log(moduleA.hi)
console.log(moduleA.welcome)
console.log(moduleA.later)
console.log(moduleA)

console.log(moduleB.goodMorning)
console.log(moduleB.goodNight())
console.log(moduleB)