function sum(array){
    let result = 0
    for (let item of array){
        result += item
    }return result
}
//
function sum2(array){
    let result = 0 
    array.forEach(e => result += e)
    return result
}
//
function sum3(array){
    const quantity = array.length
    return (quantity=== 0)? 0: array[0] + sum3(array.slice(1))
}
//
function sum4(array){
    const sum = array.reduce((accumulator, current) =>accumulator + current, 0)
    return sum
}

console.log(sum([1, 2, 3]))
console.log(sum2([1, 2, 3]))
console.log(sum3([1, 2, 3]))
console.log(sum4([1, 2, 3]))
