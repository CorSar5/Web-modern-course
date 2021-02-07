function secondBiggest(array){
    let lowests = []
    for (item in array){
        if (array[item] < Math.max(...array)){
            lowests.push(array[item])
        }
    }
    return Math.max(...lowests)
}
//
function secondBiggest2(array){
    let biggestIndex = 0
    let secondBiggest
    array.forEach((number, index)=>{
        if (number> array[biggestIndex])
            biggestIndex = index
    })
    array.splice(biggestIndex, 1)
    secondBiggest = array[0]
    
    array.forEach(number =>{
        if(number > secondBiggest)
            secondBiggest = number
    })
    return secondBiggest
}
//
function secondBiggest3(array) {
    const biggest = Math.max(...array)
    array = array.filter(number => number !=biggest)
    const second = Math.max(...array)

    return second
}
//
function secondBiggest4(array){
    const orderedNumbers = array.sort((a, b)=> b - a)
    const second = orderedNumbers[1]
    
    return second
}

console.log(secondBiggest([12, 16, 1, 5]))
console.log(secondBiggest2([12, 16, 1, 5]))
console.log(secondBiggest3([12, 16, 1, 5]))
console.log(secondBiggest4([12, 16, 1, 5]))