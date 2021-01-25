//Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any', price:1.99, tag:' promotion'
})
console.log('Extensible:', Object.isExtensible(product))

product.name = 'Ruler'
product.description = 'Ruler for School'
delete product.tag
console.log(product)

//Object.seal - add or del cant be used
const person = { name: 'Julian', age: 45}
Object.seal(person)
console.log('Sealed:', Object.isSealed(person))

person.surname = 'Brown'
delete person.name
person.age = 30
console.log(person)

//Object.freeze = Seal + constant values