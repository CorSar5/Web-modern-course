function number(x){
    let between = 0
    let others = 0
    for (let i = 0;i < x.length; i++){
        if (10<=x[i]&& x[i]<=20){
            between++
        }else{
            others++
        }
    }
    console.log(`There are ${between} numbers between 10 and 20, including them. And ${others} which are not.`)
}

x = [1, 3, 4, 5, 6, 10, 11, 12, 13, 154]
number(x)