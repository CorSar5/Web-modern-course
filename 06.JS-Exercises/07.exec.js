function between(min, max, number, inclusive = false){
    if(inclusive) return number >= min && number <= max

    return number >min && number< max
}
//
function between2(min, max, number, inclusive = false) {
    return inclusive ? number >= min && number <= max : number >min && number< max
}
console.log(between(10, 100, 50)) 
console.log(between(16, 100, 160)) 
console.log(between2(3, 150, 3)) 
console.log(between2(3, 150, 3, true))