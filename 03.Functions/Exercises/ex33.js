let x = [1, 2, 3, 4]
let y = ['a', 'b', 'c', 'd']
let z = [1.1, 2.2, 3.3, 4.4]

function vectors(...args ){
    resultado = []
    for(let i= 0; i< arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(vectors(x, z))
console.log(vectors(z, y))