console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('In a function...')
    console.log(this === exports) //False in a function
    console.log(this === module.exports) // False in a function
    console.log(this === global) // True in a function
}

logThis()