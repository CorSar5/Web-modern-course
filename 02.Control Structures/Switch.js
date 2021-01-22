const printResult = function(mark){
    switch(Math.floor(mark)){ //8.9 will be 8 with Math.floor
        case 10:
        case 9:
            console.log('Honor Board')
            break
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4: 
            console.log('Recuperation')
            break
        case 3: case 2:  case 1: case 0:
            console.log('Reproved')
            break
        default:
            console.log('Invalid Mark')
    }
}
printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)

//without break all under will be printed even they're not the specific case
//if default isn't in the end he'll need the break command