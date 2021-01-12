function a(incap, taxe, aplic){
    return incap + ( incap * taxe* aplic)
}

function b(incap, taxe, aplic){
    return incap* (1+taxe)** aplic
}

console.log(a(100, 10/100, 2))
console.log(b(100, 10/100, 2))