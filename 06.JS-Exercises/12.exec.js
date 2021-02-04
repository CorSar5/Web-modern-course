function del(object, element){
    const copy = {...object}
    //const copy2 = Object.assign({}, objeto)
    delete copy[element]
    return copy
}

console.log(del({a: 1, b: 2}, "a"))