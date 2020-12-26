const result = mark =>mark >= 7 ? 'Aproved' : 'Reproved'
//unary 1 operator binary 2 and ternary 3 ; first's an expression ;second's '?' and third's returned (True : False)
/*const result = mark => {
   return mark >= 7 ? 'Aproved' : 'Reproved'
} */

console.log(result(7.1))
console.log(result(6.7))
