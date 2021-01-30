Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i= 0; i< this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }return newArray
}

const products = [
    { name: 'Desktop', price: 2000, fragil : true},
    {name : 'iPhone', price : 1190, fragil: true},
    {name: 'Glass', price: 4.99,fragil : true},
    {name: 'Plastic cup', price: 0.99, fragil: false}
]

const bigger = arr => arr.price >=500
const fragile = product => product.fragil == true

console.log(products.filter2(bigger).filter2(fragile))
