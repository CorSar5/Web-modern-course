const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese =f=> f.pais ==='China'
const mulheres = f => f.genero === 'F'
const lowerSalarie = (worker, current) => {
    return worker.salario < current.salario ? worker : current
}

axios.get(url).then(response => {
    const workers = response.data
    const func = workers
    .filter(chinese)
    .filter(mulheres)
    .reduce(lowerSalarie)

   console.log(func)
})