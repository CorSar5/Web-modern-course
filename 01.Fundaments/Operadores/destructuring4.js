function rand([min = 0, max = 1000]) {
    if (min >max) [min, max] = [max, min] // inversão de variáveis através de Array's
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand([50, 40])) // min e max definidos, que irão ser trocados pois min > max
console.log(rand([992])) // min definido, max será o da função(padrão)
console.log(rand([, 10]))// max definido, min será o padrão
console.log(rand([]))// min e max padrão
//console.log(rand())//destructuring an undefined function
