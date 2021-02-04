function repete(param, number){
    let result = []
    for (i =0; i <number; i++){
        result.push(param)
    }
    return result
}
//
function repete2(param, number) {
    return Array(number).fill(param)
}

console.log(repete('a', 4))
console.log(repete2('e', 6))