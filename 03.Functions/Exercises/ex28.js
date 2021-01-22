function pair(x){
    let pairNumber = 0
    let oddNumber = 0
    for (let i=0; i < x.length; i ++){
        if (x[i] % 2 == 0){
            pairNumber++
        }else{
            oddNumber++
        }
    }
    return `There are ${pairNumber} pair numbers and ${oddNumber} odd numbers in the vector ${x}.`    
}

x = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(pair(x))