function odd(x = 0, y = 100){
    if (x > y){
        x = y + x
        y = x- y
        x = x - y
    }
    for (let i = x ; i<y; i++){
        if (i % 2 == 1){
            console.log(i)
        }
    }
}

odd(100, 90)