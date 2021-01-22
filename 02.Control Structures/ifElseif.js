Number.prototype.between = function(start, end){
    return this>= start && this<=end
}

const printResult = function(mark){
    if (mark.between(9,10)){
        console.log('Honor Board')
    }else if (mark.between(7,8.99)){
        console.log('Approved')
    }else if(mark.between(4,6.99)){
        console.log('Recuperation')
    }else if(mark.between(0,3.99)){
        console.log('Reproved')
    }else {
        console.log('Invalid MARK!')
    
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)
