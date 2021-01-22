let doble = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2*a 
}

dobro = a => 2*a // there are no '{}' so it will automatically be returned (only available with 1 operation or function)
console.log(dobro(Math.PI))

let hi = function() {
    return 'Hi'
}

hi = () => 'Hi' // The parentheses are needed if there's no parameter
hi = _ => 'Hi' //Has a valid parameter
console.log(hi())