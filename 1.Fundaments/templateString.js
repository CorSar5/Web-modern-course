const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!` //quebra da linha
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() // função de aumentar para Caps Lock
console.log(`Ei.. ${up(`cuidado`)}!`)