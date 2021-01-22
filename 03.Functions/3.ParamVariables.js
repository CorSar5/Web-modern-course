function sum(){
    let sum = 0
    for (i in arguments){  //arguments object is a local variable available within all non-arrow functions
        sum += arguments[i]
    }
    return sum
} 

console.log(sum)
console.log(sum(1))
console.log(sum(1.1, 2.2, 3.3))
console.log(sum('a', 'b','c'))