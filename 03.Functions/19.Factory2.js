function createProduct(name='Lion', price=1){
    return{
        name: `${name}`,
        price: `${price}`,
        discount: 0.1,
        //or  name, price, discount: 0.1
        discountedPrice: price - price * 0.1
    }
}

console.log(createProduct())
console.log(createProduct('Snickers', 0.90))