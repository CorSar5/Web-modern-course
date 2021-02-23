//let and const
{
    var a = 2
    let b = 3
    console.log(b) //only works on this block
}
console.log(a)

// Template String
const product = 'iPad'
console.log(`${product} is costly`) //If the line is striped the return will also be

// Destructuring
const [l, e, ...nine] = "CorSar"
console.log(l, e, nine)//the ones in nine will be in an array

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {age: k, name} = {name: 'Anne', age: 13}
console.log(k, name)