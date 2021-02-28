// with promise
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

//Resource from ES8
//The objective is to simplificate the use of promises...
let getStudents = async() => {
    const ClassA = await getClass('A')
    const ClassB = await getClass('B')
    const ClassC = await getClass('C')
    return [].concat(ClassA, ClassB, ClassC)
}// returns a object AsyncFunction

getStudents()
    .then(students => students.map(a => a.nome))
    .then(names => console.log(names))