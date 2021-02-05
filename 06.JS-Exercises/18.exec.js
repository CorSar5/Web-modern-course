function spends(array){
   let result = 0
    for (let item of array){
        result += item.price
    }return result.toFixed(2)
}
//
function spends2(array){
    return array.map(item =>item.price).reduce((accumulator, current) => accumulator+ current).toFixed(2)
}
//
function spends3(array){
    return array.reduce((accumulator, current) => accumulator+ current.price, 0).toFixed(2)
}


console.log(spends([
    {nome: "Galaxy S20", categoria: "Eletrônicos", price: 899.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", price: 2999.90}
    ]))
console.log(spends2([
    {nome: "Galaxy S20", categoria: "Eletrônicos", price: 899.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", price: 2999.90}
    ]))
console.log(spends3([
        {nome: "Galaxy S20", categoria: "Eletrônicos", price: 899.99},
        {nome: "Macbook Pro", categoria: "Eletrônicos", price: 2999.90}
    ]))
    

