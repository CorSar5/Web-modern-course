//Function in JS is First-Class Object(Citizens)
//Higher-order function

//Creating in a literal form
function fun1(){ }

//Storing in a variable
const fun2 = function() { }

//Storing in an array
const array = [function (a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Storing in an object attribution
const obj = {}
obj.speak = function() { return 'Wassup' }
console.log(obj.speak())

//Funcion as a parameter
function run(fun) {
    fun()
}

run(function () {console.log('Executing...')})

// A function can return/contain another function
function sum(a, b) {
    return function (c) {
        console.log(a+b+c)
    }
}

sum(2, 3)(5)
const plus = sum(2,3)
plus(4)