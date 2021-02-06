function average(array){
    let total = 0
    for (let item of array){
        total +=item
    }
    let aver = total / array.length
    return aver
}
//
function average2(array){
    let total = array.reduce((accumulator, members)=> accumulator+members) / array.length
    return total
}


console.log(average([0, 10]))
console.log(average2([1, 2, 3, 4, 5]))