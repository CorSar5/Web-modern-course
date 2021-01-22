let vector = [2, 5, 8, 10]

function marks(vector) {
    for(let i  = 0; i < vector.length; i++){
        if (vector[i] >=0.0 && vector[i] <=4.9){
            console.log(`${vector[i]} a nota é D`)
        }else if (vector[i] >4.9 && vector[i] <=6.9){
            console.log(`${vector[i]} a nota é C`)
        }else if (vector[i] >=7.0 && vector[i] <=8.9){
            console.log(`${vector[i]} a nota é B`)
        }else if (vector[i] >=9.0 && vector[i] <=10.0){
            console.log(`${vector[i]} a nota é A`)}
    }
}

marks(vector)