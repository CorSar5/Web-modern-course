// Closure is the created scope when a function is declared
// This scope will let the function access and manipule extern variables to the function

//Lexical Context in action

const x = 'Global'
function out(){
    const x= 'Local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())// return 'Local' 