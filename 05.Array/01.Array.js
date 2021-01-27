// An array is an object! Which organize its elements by index, dynamic and heterogenic structure.
console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Alicia', 'John', 'Steve')
console.log(approved)

aproved = ['Alicia', 'John', 'Steve']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3]) // undefined return

approved[3] = 'Paul' //mostly used to replace
approved.push('Michael') //mostly used to add
console.log(approved.length)

approved[9] = 'Raphael' //other aproved members between 4 and 9 will be undefined
console.log(approved.length)
console.log(approved[8]=== undefined)

console.log(approved)
aproved.sort() // it has changed 'approved' to an alphabetic order
console.log(approved)

delete approved[1]
console.log(approved[1]) //undefined
console.log(approved[2])

approved = ['Alicia', 'John', 'Steve']
approved.splice(1, 1, 'Element1', 'Element2') //add, delete, del and add at the same time
/* From splice:
-the first number is where are you starting to change from
-second is how many elements will be deleted
-after will come the elements that will be added */
console.log(approved)