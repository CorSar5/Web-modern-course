function maths(x, operator, y){
    switch(operator){
        case operator = '+':
            return x + y 
        case operator = '-':
            return x - y
        case operator = '/':
            return x/y
        case operator = '*':
            return x*y
        default:
            return 'Invalid operation'
    }
}

console.log(maths(6, '+', 3))
console.log(maths(6, '-', 3))
console.log(maths(6, '*', 3))
console.log(maths(6, '/', 3))
console.log(maths(6, 'a', 3))