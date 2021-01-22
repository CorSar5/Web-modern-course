// A factory function is a function which returns an object

//Simple Factory
function createPerson(){
    return{
        name: 'Silvia',
        surname: 'Frank'
    }
}

console.log(createPerson())