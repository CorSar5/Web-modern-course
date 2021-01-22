function n(vector){
    let negative = 0
    for(let x = 0; x < vector.length; x++){
        if (vector[x]<0){
            negative++
       }
    }
    console.log(`There are ${negative} negative numbers`)
}

x = [1, -3, -4, 5, 6, 10, 11, 12, 13, 154]
n(x)