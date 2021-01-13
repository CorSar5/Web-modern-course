function day(number){
    switch(number){
        case 1:
            return "Weekend"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Workday"
        case 7:
            return "Weekend"
        default:
            return "Invalid Day"
    }
}

console.log(day(1))
console.log(day(2))
console.log(day(3))
console.log(day(4))
console.log(day(5))
console.log(day(6))
console.log(day(7))
console.log(day('a'))
