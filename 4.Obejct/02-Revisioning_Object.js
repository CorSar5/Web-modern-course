//Dynamic collection of key/value
const product = new Object
product.name = 'Chair'
product["product brand"] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model : 'A4',
    value:89000,
    owner :{
        name: 'William' ,
        age: 40,
        address:{
            street : '4th Street',
            number: 5,
        },
    },
    drivers : [{
        name:'Guildo',
        age: 48,
    },{
        name : 'Anne',
        age : 19,
    }],
    calculateSecure: function() {
        //...
    }
}
 
car.owner.address.number  =10
car['owner']['address']['street'] = 'Liberty Street'
console.log(car)

delete car.drivers
delete car.owner.address
delete car.calculateSecure
console.log(car)
console.log(car.drivers) //undefined, drivers was deleted

//console.log(car.drivers.length) //error