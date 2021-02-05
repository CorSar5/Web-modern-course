function filterNumbers(array) { //this function usage views to filter numbers from an Array
    const NumbersArray = [] //this is the array that we'll add the numbers of the given array
    for (let item of array){
        if(typeof item === "number"){
            NumbersArray.push(item)
        }
    }return NumbersArray
}

//
function filterNumbers2(array){
    return array.filter(item => typeof item === "number")
}

console.log(filterNumbers(["1", 1, 2, 'anc']))
console.log(filterNumbers2([7,"1", 1, 2, 'anc']))