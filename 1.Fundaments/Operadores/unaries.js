let num1 = 1
let num2 = 2

num1++ //sufixed
console.log(num1)
--num1 //prefixed has a bigger priority than sufixed way
console.log(num1)

console.log(++num1=== num2--)//True
console.log(num1 === num2) //False, because the num2-- has already been operated