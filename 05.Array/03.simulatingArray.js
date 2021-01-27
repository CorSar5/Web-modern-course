const almostArray  ={0: 'Raphael', 1:'Anne', 2:'Martha'}
console.log(almostArray)
Object.defineProperty(almostArray, 'toString', {
    value: function () {return Object.values(this) },
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Raphael', 'Anne', 'Martha']
console.log(almostArray.toString(), myArray)