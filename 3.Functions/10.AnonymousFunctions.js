const sum = function(x, y){
    return x + y
}

const printResult = function(a, b, operation = sum){
    console.log(operation(a, b))
}

printResult(3, 4)
printResult(3,5, sum)
printResult(3, 6, function(x,y){
    return x - y
})
printResult(3, 4, (x, y)=> x* y)

const person = {
    speak: function() { //the word 'function' isn't necessary 'speak()' can also be used
        console.log('Sup')
    }
}

person.speak()