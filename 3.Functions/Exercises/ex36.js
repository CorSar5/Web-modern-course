let x = [1, 2, 3, 4, 5]
function  v(x, y){
    for  (let i = 0; i <x.length;i++){
        if (i == 0){
            console.log(x[i])
        }else{
           console.log(x[i]* x[i-1] )
        }
    }
    for (let c = 0; c <x.length;c++){
        console.log(x[c]* y) 
        }
    
}

v(x,5)

//
let vector = [1, 2, 3, 4 ,5]

function multiplier(vector, mult){
    let Result= []
    vector.forEach(element =>{ Result.push(element* mult) 
        
    });
    return Result
}

console.log(multiplier(vector, 5))