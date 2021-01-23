const porsche = {
    model: 'Panamera',
    MaxSpeed: 320
}

const opel = {
    model: 'Corsa',
    MaxSpeed: 180
}

console.log(porsche.__proto__)
console.log(porsche.__proto__ === Object.prototype)
console.log(opel.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null) 

function myObject () {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)