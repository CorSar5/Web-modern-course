//with promise
const http = require('http')

const getClass = leter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${leter}.json`
    return new Promise((resolve,reject)=>{
        http.get(url, answer=>  {
        let result = ''

        answer.on('data', data => {
            result += data
        })

        answer.on('end', () => {
            try {
                resolve(JSON.parse(result))
            } catch(e){
                reject(e)
            }
        })
    })
})
}

/*let names = []
getClass('A').then(students =>{
    names = names.concat(students.map(a => `A: ${a.nome}`))
    console.log(names)
    getClass('B').then(students => {
        names = names.concat(students.map(b => `B; ${b.nome}`))
        console.log(names)
        getClass('C').then(students => {
            names = names.concat(students.map(c => `C: ${c.nome}`))
            console.log(names)
        })
    })
})*/

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes =>  [].concat(...classes))
    .then(students =>students.map(stundent => stundent.nome))
    .then(names => console.log(names))
    .catch(e=> console.log(e.message)) //Always have a catch

getClass('D').catch(e=> console.log(e.message))