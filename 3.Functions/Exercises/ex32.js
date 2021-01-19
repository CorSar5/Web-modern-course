function average(vector){
    let total = 0
    for (let x = 0; x < vector.length; x++){
        total += vector[x]
    }
    return `The average of the vector is ${total / vector.length}`
}

x = [10, 10, 15, 20, 15, 20]
console.log(average(x))