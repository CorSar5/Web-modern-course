function firstAndLast(array) {
    return [array[0],array[array.length -1]]
}

//
function firstAndLast2(array) {
    const first = array.shift()
    const last = array.pop()
    return[first, last]
}
//
function firstAndLast3(first, ...array) {
    const last = array.pop()
    return[first, last]
}
console.log(firstAndLast([1, 2 ,3, 0]))
console.log(firstAndLast2([1, 2 ,3, 0, 8]))
console.log(firstAndLast2([1, 2 ,3,]))