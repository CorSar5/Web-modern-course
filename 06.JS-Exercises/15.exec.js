function onlyPairs(array){
    let result = []

    for(i = 0; i< array.length; i+=2){
        const Pair = array[i] %2 === 0
        if (Pair){
            result.push(array[i])
        }
        return result
    }
}
//
function onlyPairs2(array) {
    return array.filter((array, index) => {
        const Pair = array % 2 === 0 
        const IndexPair  =index % 2 ===0

        return Pair && IndexPair
    })
}

console.log(onlyPairs([1, 2, 3, 4]))
console.log(onlyPairs2([10, 70, 22, 43]))