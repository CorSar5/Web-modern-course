function getPrice(tax = 0, coin = '$'){
    return` ${coin} ${this.price * (1- this.disc) * (1+ tax)}`
}

const product = {
    name: 'Smartphone',
    price : 700,
    disc: 0.15,
    getPrice
}

global.price = 20
globalThis.disc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = {price: 50000, disc: 0.20}

console.log(getPrice.call(car)) 
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '€')) // you give the function variables normally
console.log(getPrice.apply(global,[0.15, '€'])) // you give the function variables by an array