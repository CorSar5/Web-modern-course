//Arrow function 
const sum = (a, b) => a + b
console.log(sum(2, 4))

//Arrow Function (this)
const lexical1= () => console.log(this === exports)
const lexical2= lexical1.bind({})
lexical1()
lexical2()

// Default parameter
function log(text = 'Node') {
    console.log(text)
}

log()
log('This will be superior')

// Rest Operator (Spread // Rest)
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(1,2,3))