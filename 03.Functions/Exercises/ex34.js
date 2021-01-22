let x = 'Amor'
let y = 'Roma'

function Strs(x, y){
    let inc= true;
    for (let i=0; i < x.length; i++){
        let carac = x.charAt(i).toLowerCase()
        for(let j = 0; j< y.length; j++){
            let carac2 = y.charAt(j).toLowerCase()
            if(carac == carac2) {
                inc = true
                break 
            }else {
                inc = false
            }
        }
        if(!inc){
            return inc
        }
    }
    return inc
}

console.log(Strs(x ,y))