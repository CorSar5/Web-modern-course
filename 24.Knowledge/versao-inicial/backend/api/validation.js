module.exports = app => {
    function existsOrError(value, msg) {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    function notExistsorError(value, msg){
        try {
            existsOrError(value, msg)
        }catch(msg){
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg) {
        if(valueA!== valueB) throw msg
    }

    return { existsOrError, notExistsorError, equalsOrError }
}