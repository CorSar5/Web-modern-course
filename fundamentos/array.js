const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //vai ser undefined

valores[4] = 10 // se definirmos uma posição com outras anteriores não definidas este vai fornecer o ' <n empty items> sendo n o número de itens que estão vazios
console.log(valores)
console.log(valores.length) // quantos valores tem a constante

valores.push({id : 3}, false, null, 'teste') // para adicionar valores a Array's
console.log(valores)
//Os tipos de Dados em Array's deve ser HOMOGÉNEO

console.log(valores.pop()) // tirar o ultimo elemento
delete valores [0] // delete o valor e o que fica entre [] é o elemento que fica empty
console.log(valores)

console.log(typeof valores) //object (um Array é um objeto)