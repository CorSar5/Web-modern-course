let string = '30, 40, 50, 56, 0 ,45, 34'

function avaliation(string){
    let ponts = string.split(', ')
    let mn =  0
    let wGame = 1
    let biggest = ponts[0]
    let lowest = ponts[0]

    for (let i = 1; i < ponts.length; i++){
        if(ponts[i]> biggest){
            biggest = ponts[i]
            mn ++
        }else if (ponts[i]< lowest){
            lowest = ponts[i]
            wGame = i+1;
        }
    
    
    }
    return[mn, wGame]
}

console.log(avaliation(string))