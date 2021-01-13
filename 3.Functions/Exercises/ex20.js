function money(x){
    let c100 = 0
    let c50 = 0
    let c10= 0
    let c5 = 0
    let c1 = 0
    let value = valor(x)
    while (x >= value){
        switch (value) {
            case 100:
                x -= 100
                c100++
                break
            case 50:
                value -= 50
                c50++
                break
            case 10:
                value -= 10
                c10++
                break
            case 5:
                value -= 5
                c5++
                break
            case 1:
                c++
                value -= 1
                break
        }
        value = valor(x)
        break
    }
    return elab(c100,c50,c10,c5,c1)
}

function valor(x){
    if (x >= 100){
        return 100
    }
    else if (x >= 50){
        return 50
    }
    else if (x >= 10){
        return 10
    }
    else if (x >= 5){
        return 5
    }
    else if (x >= 1){
        return 1
    }
}

function elab(c100,c50,c10,c5,c1){
    let result = ''

    if(c100>0){
        result += `${c100} notes of 100€. `
    }
    if(c50>0){
        result += `${c50} notes of 50€.`
    }
    if(c10>0){
        result += `${c10} notes of 10€.`
    }
    if(c5>0){
        result += `${c5} notes of 5€.`
    }
    if(c1>0){
        result += `${c1} notes of 1€.`
    }
    return result
}

console.log(money(153));