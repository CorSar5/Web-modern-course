//return false //non of the elements will be returned //return true // all the elements will be returned
const products = [
    { name: 'Desktop', price: 2000, fragil : true},
    {name : 'iPhone', price : 1190, fragil: true},
    {name: 'Glass', price: 4.99,fragil : true},
    {name: 'Plastic cup', price: 0.99, fragil: false}
]

const bigger = product => product.price >=500

const fragile = params =>params.fragil 

const result = products.filter(bigger).filter(fragile)
console.log(result)