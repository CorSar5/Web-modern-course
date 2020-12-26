// new resource do ES2015

const person = {
    name : 'Anne',
    age : 5,
    address: {
        street : '13th Street, California',
        number : 6
    }
}

const {name, age} = person
console.log(name, age)

const { name: n , age : a } = person
console.log(n, a)

const {surname, Happy = true} = person
console.log(surname, Happy)

const { address : {street, number, st}} = person
console.log(street, number, st)

//const = {account : { agency, num }} = person . You can destructure a data that is undefined or doesn't exist