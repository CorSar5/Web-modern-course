console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // even attributing null to exports it will not change

exports = {
    name: 'Test'
} //Won't be applied

console.log(module.exports)

module.exports = {public : true}//Only using the whole form module.exports it will change