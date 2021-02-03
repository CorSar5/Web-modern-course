function inverse(parameter){
    if(typeof parameter === "boolean"){
        if (parameter == true){
            return false
        }else{
            return true}
    }
    else if(typeof parameter == "number"){
        if (parameter == 0)return 0
        else{const invint = -1 * parameter
        return invint}
    }
    else{
        return `Boolean type or numbers expected, this parameter is a ${typeof parameter}`
    }
}

console.log(inverse(true))
console.log(inverse(false))
console.log(inverse(4.22))
console.log(inverse(0))
console.log(inverse(-12))
console.log(inverse('Anything'))

// 
function invert(value) {
    const type = typeof value
    if (type == 'boolean') return !value
    else if (type == 'number') return -value
    else
        return `Boolean or number expected, but the parameter is ${type} typed`
    
}

console.log(invert(true))
console.log(invert(false))
console.log(invert(4.22))
console.log(invert(0))
console.log(invert(-12))
console.log(invert('Anything'))