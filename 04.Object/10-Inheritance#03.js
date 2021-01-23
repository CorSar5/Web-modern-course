const father = {name: 'Peter', hairColor: 'Dark'}

const daughter1 = Object.create(father)
daughter1.name = 'Anne'
console.log(daughter1.hairColor)

const daughter2 = Object.create(father, {
    name: {value : 'Riley', writable: false, enumerable: true} // if enumerable = false name wont appear
})

console.log(daughter2.name)
daughter2.name = 'Carlie'
console.log(`${daughter2.name} has hair ${daughter2.hairColor}`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for (let key in daughter2){
    daughter2.hasOwnProperty(key)?
        console.log(key) : console.log(`Per Inheritance: ${key}`)
}