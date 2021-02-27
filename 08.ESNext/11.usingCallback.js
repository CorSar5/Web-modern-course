//without promise
const http = require('http')

const getClass = (leter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${leter}.json`
    http.get(url, answer=>  {
        let result = ''

        answer.on('data', data => {
            result += data
        })

        answer.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getClass('A', students =>{
    names = names.concat(students.map(a => `A: ${a.nome}`))
    console.log(names)
    getClass('B', students => {
        names = names.concat(students.map(b => `B; ${b.nome}`))
        console.log(names)
        getClass('C', students => {
            names = names.concat(students.map(c => `C: ${c.nome}`))
            console.log(names)
        })
    })
})