function product(x, numb){
    switch(x){
        case x = 100:
            return 3 * numb
        case x = 200:
            return 4 * numb
        case x = 300:
            return 5.5 * numb
        case x = 400:
            return 7.5 * numb
        case x = 500:
            return 3.5 * numb
        case x = 600:
            return 2.8 * numb
        default:
            return 'Non-Existing Product'
    }
}

console.log(product(100, 2))
console.log(product(200, 1))
console.log(product(300, 0))
console.log(product(400, 3))
console.log(product(500, 1))
console.log(product(600, 1))
console.log(product(700, 4))
