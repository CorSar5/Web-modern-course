let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo= 1
console.log(!!isAtivo) // ! funciona como negação(false) e !!(negação da negação) é true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // basta 1 espaço branco para se aplicar o boolean
console.log('Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || ' ')) //caso nao tenha !! atribui o 1º valor verdadeiro || -> ou 

let nome = ''
console.log(nome || 'Desconhecido') // quando não se dá um valor aparece a 1ª parte True
