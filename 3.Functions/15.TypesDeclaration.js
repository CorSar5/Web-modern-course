console.log(sum(3,4))
//console.log(sub(3, 4)) //Bug because function expressions/named function expression can't be used before they're written

// function declaration
function sum(x, y){
    return x+y
}

//function expression
const sub = function (x,y){
    return x - y
}

//named function expression
const mult = function mult(x, y){
    return x*y
}
