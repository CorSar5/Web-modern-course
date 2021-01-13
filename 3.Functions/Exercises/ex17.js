function plan(x, sal){
    switch(x){
        case x = 'A':
            return sal + (sal*0.1)
        case x = 'B':
            return sal + (sal*0.15)
        case x = 'C':
            return sal + (sal * 0.2)
        default:
            return 'Work plan unavailable'
    }
}

console.log(plan('A', 500))
console.log(plan('B', 500))
console.log(plan('C', 500))
console.log(plan('D', 500))