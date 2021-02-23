// ES8: Object.values/Object.entries
const obj = { a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements in literal notation
const name = 'Carl'
const person = {
    name,
    hi(){
        return 'Hi'
    }
}

console.log(person.name, person.hi())

// Class
class Animal {}
class Dog extends Animal {
    speak(){
        return 'Unavailable Feature, dude, wtf a dog cannot speak '
    }
}

console.log(new Dog().speak())