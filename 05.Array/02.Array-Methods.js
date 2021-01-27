const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() //massa left, pop removes the last element from the array
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() //shift removes the first element from the array
console.log(pilots)

pilots.unshift('Hamilton') //unshift adds a element to the first position/0
console.log(pilots)

//Splice we can add and remove elements

//add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

//remove
pilots.splice(3, 1)
console.log(pilots)

//Slice
const somePilots1 = pilots.slice(2) //new Array from Index 2
console.log(somePilots1)

const somePilots2 = pilots.slice(1, 4) // from 1 to 3, 4 won't be included
console.log(somePilots2)