//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a +b)
}

imprimirSoma(2, 3 )

// Armazenar uma função arrow numa variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a-b     //quando não há {} existe apenas 1 linha, que vai ser retornada
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Impressão!')