function plus(number) {
    return Array(number).fill('+').join('')
}
//
function plus2(number) {
   return '+'.repeat(number) 
}
//
function plus3(number) {
    let result = ''
    for(i = 0; i< number ; i++){
        result += '+'
    }
    return result
}
console.log(plus(4))
console.log(plus2(3))
console.log(plus3(2))
