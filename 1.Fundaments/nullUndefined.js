let valor //não inicializada
console.log(valor) // undefined
//console.log(valor2)// not defined, nem foi declarado o valor2

valor = null //ausência de valor, deve-se usar null e não Undefined
console.log(valor)
// console.log(valor.toString()) // Null é unreadable, TypeError defect

const produto = {}
console.log(produto.preco) // undefined, não está definido
// console.log(produto.preco.a) //Erro porque preço não está definido
//console.log(produto) // {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
 // delete produto.preco // para retirar o atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)