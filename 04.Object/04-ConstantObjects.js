// person -> 123(address) -> {...} (object - can be modified)
const person = {name : 'John'}
person.name = 'Peter'
console.log(person)

//person <- 456(address)-> {...} (new object with a diferent address)
//person = { name: 'Anne'} 

Object.freeze(person) // no one can add delete or modify any object from the constant

person.name = 'Marie' // as the object has been frozen it won't change
person.adrress = 'Street ABC' // it will not be added
delete person.name // It will not be deleted

console.log(person.name)
console.log(person)

const constantPerson = Object.freeze({name: 'John'})
constantPerson.name = 'Alicia'
console.log(constantPerson)