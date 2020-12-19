//par name/value
const greetings = 'Sup' // lexical context 1

function exec() {
    const greetings = 'Wassup' //lexical context 2
    return greetings
}

//Objects are nested groups of name/value
const client = {
    name : 'Peter',
    age : '32',
    weight : '89',
    adress: {
        place : 'United States, Florida',
        number : '13'
    }
}

//console.log(greetings)
console.log(exec())
console.log(client)