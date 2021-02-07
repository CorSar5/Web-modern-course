function NumberOfDigits(array, number){
    return array.filter(numbers => {
        let splitted = (""+numbers).split("") 
        if (splitted.length === number){
            return numbers
        }})
}
//
function NumberOfDigits2(array, number){
    let result = []
    for(numbers of array){
        const numberofDigit = String(numbers).length
        if(numberofDigit === number)
            result.push(numbers)
    }return result
}
//
function NumberOfDigits3(array, number){
    return array.filter( numbers => {
        const numberofDigit = String(numbers).length
        return numberofDigit === number
    })
}

console.log(NumberOfDigits([38, 2, 365, 10, 125, 11], 2))
console.log(NumberOfDigits2([5, 9, 1, 125, 11], 1))
console.log(NumberOfDigits3([5, 9, 1, 125, 11], 1))