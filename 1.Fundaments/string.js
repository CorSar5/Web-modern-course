const escola = "Cod3r"

console.log(escola.charAt(4)) // Dar a letra da posição 4
console.log(escola.charAt(5)) // Retorna vazio por não existir a 5ª letra
console.log(escola.charCodeAt(3)) // dá o carater em unicode
console.log(escola.indexOf('3')) // Finder de caracteres

console.log(escola.substring(1)) // dando do 1 até ao final
console.log(escola.substring(0,3)) // do 0 ao 3 a mesma função

console.log('Escola '.concat(escola).concat('!')) // a partir de uma string adicionar funçoes ou strings, pode-se usar +

console.log(escola.replace(3, 'e')) /* Para dar replace nas funções /\d/ -substitui as letras/\w/ a primeira letra e /\w/g globalmente*/
console.log('Ana, Maria, Pedro'.split(',')) // separa com o que fica entre .split() tb se usa /n/ em vez de 'n'
