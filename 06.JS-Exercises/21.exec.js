function lowestNumber(array){
    let lowest = array[0]
    for (let item in array)
        if (array[item] < lowest)
            lowest = array[item]
        
    return lowest
}
//
function lowestNumber2(array){return Math.min(...array)}
//
function lowestNumber3(array){return array.reduce((last, current) => last < current ? last: current)}

console.log(lowestNumber([10, 5, 35, 65]))
console.log(lowestNumber2([5, -15, 50, 3]))
console.log(lowestNumber3([10, 5, 35, 65]))
