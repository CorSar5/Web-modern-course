function object2Array(object){
    return Object.entries(object)
}
//
function object2Array2(object) {
    const keys = Object.keys(object)
    const result = keys.map(key => [key, object[key]])
    return result
}
//
function object2Array3(object) {
    const result = []
    for (let key in object)
        result.push([key, object[keu]])
    return result
}
console.log(object2Array({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))
console.log(object2Array2({
        codigo: 11111,
        preco: 12000
        }))