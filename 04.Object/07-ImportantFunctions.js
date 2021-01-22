const person = {
    name : 'Alicia',
    age: 10,
    weight : 28,
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value])=> {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'bornDate',{
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

person.bornDate = '01/01/2019'
console.log(person.bornDate)
console.log(Object.keys(person))

//Object.assign (ECMAScript 2015)
const dest = {a :1}
const o1= {b:2}
const o2 = {c:3, a:4} // It will overwrite a from 1 to 4
const obj = Object.assign(dest, o1, o2) 
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)