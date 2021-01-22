const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // resposta será true or false e .isInteger questiona
console.log(Number.isInteger(peso2)) // se um número e inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed pode ser um indicador de casas decimais
console.log(media.toString(2)) // .toString() transforma um Number em String com (2) binário
console.log(typeof media) //Para questionar o tipo da const/var/let/function.
console.log(typeof Number) // Function