const printResult = function(mark){
    if(mark>=7){
        console.log('Approved!')
    }else{
        console.log('Reproved!')
    }
}

printResult(10)
printResult(5)
printResult('Damn!') // Return the else variation, Attention!!!
