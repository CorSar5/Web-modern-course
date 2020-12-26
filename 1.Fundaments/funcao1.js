// Função sem retorno
function imprimirSoma(a, b) {
    console.log( a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // Caso um valor/ambos não seja dado ficamos com NaN
imprimirSoma(2 , 3, 4,5,6) //Após o 2º valor ou valor de posição 1 todos os outros elementos serão ignorados


//Função com retorno
function soma(a,b = 1) {
    return a + b
}

console.log(soma(2, 3)) // Para imprimir no console tem de se usar a propriedade
console.log(soma(2)) // Um valor apenas mas considera o valor padrão de b = 1
console.log(soma()) //NaN porque a está Undefined