const numbers = [1, 2, 3, 4, 5]

//Map is a for with a purpose
let result = numbers.map(function (e) {
    return e*2
})

console.log(result)

//Map doesn't change the actual array it creates a new one

const sum10 = e=> e+10
const triple = e=> e*3
const forMoney = e=> `€ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbers.map(sum10).map(triple).map(forMoney)
console.log(result)