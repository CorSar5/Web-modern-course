function takeMoney(Value) {
    let counter100 = 0
    let counter50 = 0
    let counter10 = 0
    let counter5 = 0
    let counter1 = 0
    let Notevalue = calculater(Value)
    while (Value >= Notevalue){
        switch (Notevalue) {
            case 100:
                Value -= 100
                counter100++
                break
            case 50:
                Value -= 50
                counter50++
                break
            case 10:
                Value -= 10
                counter10++
                break
            case 5:
                Value -= 5
                counter5++
                break
            case 1 :
                Value -=1
                counter1++
                break
        }
        
        Notevalue = calculater(Value)

    }
    return elaborate(counter100, counter50, counter10, counter5, counter1)
}

function calculater(Value) {
    if (Value >= 100){
        return 100
    }else if (Value >= 50){
        return 50
    }else if (Value >= 10) {
        return 10
    }else if (Value >= 5){
        return 5
    }else if (Value >= 1){
        return 1
    }
}

function elaborate(counter100, counter50, counter10, counter5, counter1) {
    let result = ''

    if (counter100> 0) {
        result += `${counter100} note(s) of 100€.`
    }

    if (counter50 > 0){
        result += `${counter50} note(s) of 50€.`
    }

    if (counter10>0) {
        result += `${counter10} note(s) of 10€.`
    }

    if (counter5 > 0) {
        result += `${counter5} note(s) of 5€`
    }

    if (counter1 > 0){
        result += `${counter1} note(s) of 1€`
    }

    return result
}

console.log(takeMoney(166))