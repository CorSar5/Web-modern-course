function compair(x){
    let biggest 
    let shortest 
    for (let i = 0; i<x.length; i++){
        if (biggest === undefined && shortest ===undefined){
            biggest = x[i]
            shortest = x[i]
        }else{   
            if (x[i]>=biggest){
                biggest = x[i]
            }
             if (x[i]<=shortest){
                shortest = x[i]
            }
        }
        
    }
    console.log(`The biggest number in the vector is ${biggest} and the lowest is ${shortest}.`)
}


vector = [1, 2, 15, 20, 5, 100, 0]
compair(vector)