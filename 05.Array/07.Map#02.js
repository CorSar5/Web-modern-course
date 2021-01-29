const car = [
    '{ "name": "Rubber", "price": 2.90}',
    '{ "name": "Book", "price":23.60}',
    '{ "name": "Pencil Sharpener", "price": 5.50}',
    '{ "name": "Pen", "price": 9.50}'
]

//Return only an array with the prices
const obj = json=> JSON.parse(json)
const prices = product => product.price

const result = car.map(obj).map(prices)
console.log(result)