function salute(name){
    return function(req, res, next) {
        console.log(`Welcome ${name}`)
        next()
    }
}

module.exports = salute